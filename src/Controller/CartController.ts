import CartService from "../Service/CartService";
import { Request, Response } from "express";
const cartService = new CartService;

class CartController{

    async getCarts(req: Request, res: Response){
        try{
            res.json(await cartService.getCarts()).status(200);
        } catch (err: any){
            res.json(err.message).status(201);
        }
    }

    async getCartById(req: Request, res: Response){
        try{
            res.json(await cartService.getCartById(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(201);
        }
    }
}

export default CartController;