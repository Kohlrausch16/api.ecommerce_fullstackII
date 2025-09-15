import { Router } from "express";
import AuthenticationController from "../Controller/AuthenticationController";

const authRoutes = Router();
const authController = new AuthenticationController;

authRoutes.post('/login', authController.validateCredentials);

export default authRoutes;