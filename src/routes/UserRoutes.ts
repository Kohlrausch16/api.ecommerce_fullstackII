import { Router } from "express";
import UserController from "../Controller/UserController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";

const userRouter = Router();
const userController = new UserController;

userRouter.get('/usuario', authenticationMiddleware, authorizationMiddleware('get-users'), userController.getUsers);
userRouter.get('/usuario/:id', authenticationMiddleware, authorizationMiddleware('get-user-by-id'), userController.getUserById);

export default userRouter;