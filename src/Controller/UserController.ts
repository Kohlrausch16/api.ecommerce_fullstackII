import { Request, Response } from "express";
import UserService from "../src/Service/UserService";

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
            res.json(await userService.getUserById(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(404);
        }
    }

    async addUser(req: Request, res: Response) {
        try {
            res.json(await userService.addUser(req.body)).status(201);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            res.json(await userService.updateUser(req.params.id, req.body)).status(200);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            res.json(await userService.deleteUser(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }

/*    async patchUserStatus(req: Request, res: Response) {
        try {
            res.json(await userService.patchUserStatus(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }*/
}

export default UserController;