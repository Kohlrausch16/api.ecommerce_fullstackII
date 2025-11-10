import { Request, Response } from "express";
import OrderService from "../Service/OrderService";
import { Order } from "../Entities/Order";

const orderService = new OrderService;

class OrderController{

    async getOrders(req: Request, res: Response){
        try{
            res.json(await orderService.getOrders()).status(200);
        } catch(err: any){
            res.json(err.message).status(204);
        }
    }

    async addOrder(req: Request, res: Response){
        try{
            res.json(await orderService.addOrder(req.body.cartId as string)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

}

export default OrderController;