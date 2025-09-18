import { NextFunction, Request, Response } from "express";
import AuthenticationService from "../Service/AuthenticationService";
import AuthenticationRepository from "../Repository/AuthenticationRepository";


export const authorizationMiddleware = (requiredPermission: string) => {

    const authService = new AuthenticationService;

   return(async (req: Request, res: Response, next: NextFunction) => {
        try{
            const {token, refresh_token} = req.headers;
            const verifiedToken: boolean = await authService.checkPermissions(token as string, requiredPermission as string); 

            next();
        } catch (err: any) {
            res.json(err.message).status(401);
        }
   });
}