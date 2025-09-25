import { Router } from "express";

const cartItemRouter = Router();

cartItemRouter.get('/item-carrinho');
cartItemRouter.get('/item-carrinho/:id');
cartItemRouter.post('/item-carrinho');
cartItemRouter.put('/item-carrinho/:id');
cartItemRouter.delete('/item-carrinho/:id');

export default cartItemRouter;