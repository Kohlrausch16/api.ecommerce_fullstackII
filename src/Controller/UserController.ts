import { Request, Response } from "express";
import UserService from "../Service/UserService";
import { User } from "../Model/User";

const userService = new UserService();

class UserController {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (err: any) {
            res.status(404).json({ error: err.message });
        }
    }
/*
    async addUser(req: Request, res: Response) {
        try {
            const newUser: User = req.body;
            const url = await userService.addUser(newUser);
            res.status(201).json({ message: "Usuário criado com sucesso!", url });
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const result = await userService.deleteUser(req.params.id);
            res.status(200).json({ message: result });
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }
}/*

export default UserController;
