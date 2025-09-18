import { NextFunction, Request, Response } from "express"
import AuthenticationService from "../Service/AuthenticationService";
import { AuthTokens } from "../Entities/Authentication";

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const authenticationService = new AuthenticationService;

    try{
        const { token, refresh_token } = req.headers;

        if(!token || !refresh_token) throw new Error('Token or refresh token not informed');
        
        const {updatedToken, updatedRefreshToken} = await authenticationService.validateTokens({token, refresh_token} as AuthTokens);

        res.set('token', updatedToken);
        res.set('refresh_token', updatedRefreshToken);

        next();

    } catch (err: any){
        res.json(err.message).status(401);
    }

    return;
}