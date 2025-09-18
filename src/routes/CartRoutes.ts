import { Router } from "express";

const cartRouter = Router();

cartRouter.get('/cart');
cartRouter.get('/cart/:id');
cartRouter.post('/cart');
cartRouter.put('/cart/:id');
cartRouter.delete('/cart/:id');


export default cartRouter;