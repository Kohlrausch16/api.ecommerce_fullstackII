import { Router } from "express";

const userRouter = Router();

userRouter.get('/usuario');
userRouter.get('/usuario/:id');

export default userRouter;