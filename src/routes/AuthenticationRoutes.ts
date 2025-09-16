import { Router } from "express";
import AuthenticationController from "../Controller/AuthenticationController";

const authRoutes = Router();
const authController = new AuthenticationController;

authRoutes.post('/login', authController.login);
authRoutes.get('/logout', authController.logout);

export default authRoutes;