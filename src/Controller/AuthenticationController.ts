import { Request, Response } from "express";
import { validateCredentials } from "./Schema/AuthenticationSchema";
import AuthenticationService from "../Service/AuthenticationService";
import { AuthCredentials } from "../Entities/Authentication";


const authService = new AuthenticationService;

class AuthenticationController{

    async login(req: Request, res: Response){
        
        try{
            const db = require('../Database/dbConfig')

            const {email, password} = req.body;

            if(!email || !password) 
                throw new Error('Email or password incorrect/not informed! - AuthController');

            await validateCredentials.validate({email, password}, {stripUnknown: true});
            const {token, refreshToken} = await authService.checkCredentials({email, password} as AuthCredentials);
            
            res.set('token', token);
            res.set('refresh_token', refreshToken);
            
            res.status(200).json({
                message: "Login successful",
                token: token,
                refreshToken: refreshToken
            });

        } catch(err: any) {
            res.status(403).json({ error: err.message });
        }
    }

    async logout(req: Request, res: Response){
        res.set('token', '');
        res.set('refresh_token', '');
        res.status(200).json({ message: "Logout successful" });
    }

}

export default AuthenticationController;