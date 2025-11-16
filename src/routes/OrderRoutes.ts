import { Router } from "express";
import OrderController from "../Controller/OrderController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";

const orderRouter = Router();
const orderController = new OrderController;

orderRouter.get('/pedido', orderController.getOrders);
orderRouter.get('/pedido/mensal', authenticationMiddleware, authorizationMiddleware('get-monthly-order-report'), orderController.getOrdersByMonth);
orderRouter.get('/pedido/venda', authenticationMiddleware, authorizationMiddleware('get-most-sold-product'), orderController.getMostSoldProduct);
orderRouter.post('/pedido', orderController.addOrder);

export default orderRouter;

