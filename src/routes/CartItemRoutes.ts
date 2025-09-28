import { Router } from "express";
import CartItemController from "../Controller/CartItemController";

const cartItemRouter = Router();
const cartItemController = new CartItemController;

cartItemRouter.get('/item-carrinho/:id', cartItemController.getCartItemById);
cartItemRouter.post('/item-carrinho', cartItemController.addCartItem);

export default cartItemRouter;