import { Request, Response } from "express";
import UserService from "../Service/UserService";

const userService = new UserService;

class UserController{

    async getUsers(req: Request, res: Response){
        try{
            res.json(await userService.getUsers()).status(200);
        } catch (err: any){
            res.json(err.message).status(201);
        }
    }

}

export default UserController;