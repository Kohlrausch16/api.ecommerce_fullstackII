import { NextFunction } from "express";


export const authorizationMiddleware = async (requiredPermission: string): Promise<any> => {
    return(async(next: NextFunction) => {

    });   
}