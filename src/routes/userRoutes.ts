import { Router } from "express";
import UserController from "../Controller/UserController";

const userRouter = Router();
const userController = new UserController;

userRouter.get('/usuario', userController.getUsers);
userRouter.get('/usuario/:id', userController.getUserById);
userRouter.delete('/usuario/:id', userController.deleteUser);

export default userRouter;