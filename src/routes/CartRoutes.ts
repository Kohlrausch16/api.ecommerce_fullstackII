import { Router } from "express";
import CartController from "../Controller/CartController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";

const cartRouter = Router();
const cartController = new CartController;

cartRouter.get('/carrinho/:id', /*authenticationMiddleware, authorizationMiddleware('get-cart-by-id'),*/ cartController.getCartById);

export default cartRouter;