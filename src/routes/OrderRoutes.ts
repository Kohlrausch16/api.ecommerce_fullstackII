import { Router } from "express";
import OrderController from "../Controller/OrderController";

const orderRouter = Router();
const orderController = new OrderController;

orderRouter.get('/pedido', orderController.getOrders);
orderRouter.post('/pedido', orderController.addOrder);

export default orderRouter;

