import { Request, Response } from 'express'
import { Cart } from "../Entities/Cart";
import CartService from "../Service/CartService";

const cartService = new CartService;

class CartController{

    async getUserCart(req: Request, res: Response): Promise<void>{
       try{
            const { token } = req.headers;
            res.json(await cartService.getUserCart(token as string)).status(200);
       } catch(err: any){
            res.json(err.message).status(400);
       }
    }

}

export default CartController;