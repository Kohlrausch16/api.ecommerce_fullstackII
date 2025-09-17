import { NextFunction, Request, Response } from "express";


export const authorizationMiddleware = async (requiredPermission: string): Promise<void> => {
   return( async (req: Request, res: Response) => {
        try{

        } catch (err: any) {
            res.json(err.message).status(401);
        }
   });
}