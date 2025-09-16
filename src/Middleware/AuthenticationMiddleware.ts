import { Request, Response } from "express"
import AuthenticationService from "../Service/AuthenticationService";
import { AuthJWT } from "../Entities/Authentication";

export const authenticationMiddleware = async (req: Request, res: Response) => {

    const authenticationService = new AuthenticationService;

    try{
        const { token, refresh_token } = req.headers;

        if(!token || !refresh_token) throw new Error('Token or refresh token not informed - AuthMiddleware');
        
        //const updatedRefreshToken = await authenticationService.refreshToken(token as string);
        
        //res.set('token', updatedToken);
        //res.set(updatedRefreshToken);  
        
        //next();

    } catch (err: any){
        res.json(err.message).status(401);
    }

    return;
}