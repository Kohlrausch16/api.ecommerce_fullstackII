import { Router } from "express";
import CartController from "../Controller/CartController";

const cartRouter = Router();
const cartController = new CartController;

cartRouter.get('/carrinho', cartController.getUserCart);
cartRouter.put('/carrinho/:id');
cartRouter.delete('/carrinho/:id');


export default cartRouter;