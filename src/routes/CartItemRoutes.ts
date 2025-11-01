import { Router } from "express";
import CartItemController from "../Controller/CartItemController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";

const cartItemRouter = Router();
const cartItemController = new CartItemController;

cartItemRouter.get('/item-carrinho/:id', /*authenticationMiddleware, authorizationMiddleware('get-cart-item-by-id'),*/ cartItemController.getCartItemById);
cartItemRouter.post('/item-carrinho', /*authenticationMiddleware, authorizationMiddleware('add-cart-item'),*/ cartItemController.addCartItem);
cartItemRouter.put('/item-carrinho/:id', /*authenticationMiddleware, authorizationMiddleware('put-cart-item'),*/ cartItemController.updateCartItem);
cartItemRouter.delete('item-carrinho/:id', /*authenticationMiddleware, authorizationMiddleware('delete-cart-item'),*/ cartItemController.deleteCartItem);

export default cartItemRouter;  