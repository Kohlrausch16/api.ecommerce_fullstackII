import { Request, Response } from "express";
import OrderService from "../Service/OrderService";

const orderService = new OrderService;

class OrderController{

    async getOrders(req: Request, res: Response){
        try{
            res.json(await orderService.getOrders()).status(200);
        } catch(err: any){
            res.json(err.message).status(204);
        }
    }

    // Exemplo query: /mensal?initial=2025-11-01&final=2025-11-30
    async getOrdersByMonth(req: Request, res: Response){
        try{
            res.json(await orderService.getOrdersByMonth(req.query.initial as string, req.query.final as string)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    async getMostSoldProduct(req: Request, res: Response): Promise<any>{
        try{
            res.json(await orderService.getMostSoldProduct()).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
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