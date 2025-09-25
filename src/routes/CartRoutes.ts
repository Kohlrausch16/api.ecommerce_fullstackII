import { Router } from "express";
import CartController from "../Controller/CartController";

const cartRouter = Router();
const cartController = new CartController;

cartRouter.get('/carrinho', cartController.getUserCart);


export default cartRouter;