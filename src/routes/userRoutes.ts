import { Router } from "express";
import UserController from "../Controller/UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.get('/user', userController.getUsers);
userRouter.get('/user/:id', userController.getUserById);
userRouter.post('user', userController.addUser)
userRouter.delete('user/:id', userController.deleteUser);

export default userRouter;