import { Request, Response } from "express"
import AuthenticationService from "../Service/AuthenticationService";
import { AuthJWT } from "../Model/AuthenticationPayload";

export const authenticationMiddleware = async (req: Request, res: Response) => {
    const authenticationService = new AuthenticationService;

    try{
        const { token, refresh_token } = req.headers;
        if(!token || !refresh_token) throw new Error("Token or refresh token not informed");
        
        await authenticationService.token(token as string)
        //await authenticationService.refreshToken(refreshToken as string);

    } catch (err: any){
        res.json(err.message).status(401);
    }
}