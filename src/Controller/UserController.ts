import { Request, Response } from "express";
import UserService from "../Service/UserService";
import { User } from "../Model/User";

const userService = new UserService;

class UserController {
    async getUsers(req: Request, res: Response) {
        try {
            res.json(await userService.getUsers()).status(200);
        } catch (err: any) {
            res.json(err.message).status(204);
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            res.json(await userService.getUserById(req.params.id));
        } catch (err: any) {
            res.json(err.message).status(404);
        }
    }

    /*
    addUser(req: Request, res: Response) {
        try {
            res.json(userService.addUser(req.body as User)).status(201);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }

    deleteUser(req: Request, res: Response) {
        try {
            res.json(userService.deleteUser(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(404);
        }
    }
    */
}

export default UserController;
