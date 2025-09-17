/*import { Request, Response } from "express";
import CartItemService from "../Service/CartItemService";

const cartItemService = new CartItemService();

class CartItemController {
    async getCartItems(req: Request, res: Response) {
        try {
            res.json(await cartItemService.getCartItems()).status(200);
        } catch (err: any) {
            res.json(err.message).status(204);
        }
    }

    async getCartItemById(req: Request, res: Response) {
        try {
            res.json(await cartItemService.getCartItemById(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(404);
        }
    }

    async addCartItem(req: Request, res: Response) {
        try {
            res.json(await cartItemService.addCartItem(req.body)).status(201);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }

    async updateCartItem(req: Request, res: Response) {
        try {
            res.json(await cartItemService.updateCartItem(req.params.id, req.body)).status(200);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }

    async deleteCartItem(req: Request, res: Response) {
        try {
            res.json(await cartItemService.deleteCartItem(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(404);
        }
    }

    async patchCartItemStatus(req: Request, res: Response) {
        try {
            res.json(await cartItemService.patchCartItemStatus(req.params.id)).status(200);
        } catch (err: any) {
            res.json(err.message).status(400);
        }
    }
}

export default CartItemController;*/