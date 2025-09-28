import { Request, Response } from "express";
import CartItemService from "../Service/CartItemService";

const cartItemService = new CartItemService;

class CartItemController{

    async getCartItemById(req: Request, res: Response){
        try{
            res.json(await cartItemService.getCartItemById(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(204);
        }
    }

    async addCartItem(req: Request, res: Response){
        try{
            res.json(await cartItemService.addCartItem(req.body)).status(201);
        } catch (err: any){
            res.json(err.message).status(400);
        }
    }

    async deleteCartItem(req: Request, res: Response){
        try{
            res.json(await cartItemService.deleteCartitem(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(404);
        }
    }


}

export default CartItemController;