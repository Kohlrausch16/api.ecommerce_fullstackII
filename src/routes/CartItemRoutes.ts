import { Router } from "express";
import CartItemController from "../Controller/CartItemController";

const cartItemRouter = Router();
const cartItemController = new CartItemController;

cartItemRouter.get('/item-carrinho');
cartItemRouter.get('/item-carrinho/:id');
cartItemRouter.post('/item-carrinho', cartItemController.addCartItem);
cartItemRouter.put('/item-carrinho/:id');
cartItemRouter.delete('/item-carrinho/:id');

export default cartItemRouter;