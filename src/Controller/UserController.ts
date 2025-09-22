import { Request, Response } from "express";
import UserService from "../Service/UserService";
import UserRepository from "../Repository/UserRepository";

const userService = new UserService;
const userRepository = new UserRepository;

class UserController{

    async getUsers(req: Request, res: Response){
        try{
            res.json(await userService.getUsers()).status(200);
        } catch(err: any){
            res.json(err.message).status(204);
        }
    }

    async getUserById(req: Request, res: Response){
        try{
            res.json(await userService.getUserById(req.params.id as string)).status(200);
        } catch(err: any){
            res.json(err.message).status(204);
        }
    }

    async deleteUser(req: Request, res: Response){
        res.json(await userRepository.deleteuser(req.params.id));
        
    }
}

export default UserController;