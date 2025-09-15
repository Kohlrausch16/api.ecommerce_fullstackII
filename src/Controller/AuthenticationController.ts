import { Request, Response } from "express";
import { validateCredentials } from "./Schema/AuthenticationSchema";

class AuthenticationController{

    async validateCredentials(req: Request, res: Response){
        try{
            const {email, password} = req.body;

            if(!email || !password) 
                throw new Error('Email or password incorrect/not informed!');

            const validatedCredentials = await validateCredentials.validate({email, password}, {stripUnknown: true});

            

        } catch(err: any) {
            res.json(err.message).status(403);
        }
    }

}

export default AuthenticationController;