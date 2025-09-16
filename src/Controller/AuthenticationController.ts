import { Request, Response } from "express";
import { validateCredentials } from "./Schema/AuthenticationSchema";
import AuthenticationService from "../Service/AuthenticationService";
import { AuthCredentials } from "../Entities/Authentication";


const authService = new AuthenticationService;

class AuthenticationController{

    async validateCredentials(req: Request, res: Response){
    
        try{

            const db = require('../Database/dbConfig')

            const {email, password} = req.body;

            if(!email || !password) 
                throw new Error('Email or password incorrect/not informed! - AuthController');

            await validateCredentials.validate({email, password}, {stripUnknown: true});
            await authService.checkCredentials({email, password} as AuthCredentials);
            

        } catch(err: any) {
            res.json(err.message).status(403);
        }
    }

}

export default AuthenticationController;