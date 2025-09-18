import { Router } from "express";

const cartItemRouter = Router();

cartItemRouter.get('/cart-item');
cartItemRouter.get('/cart-item/:id');
cartItemRouter.post('/cart-item');
cartItemRouter.put('/cart-item/:id');
cartItemRouter.delete('/cart-item/:id');

export default cartItemRouter;