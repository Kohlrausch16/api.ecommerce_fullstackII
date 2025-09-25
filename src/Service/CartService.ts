import { Cart } from "../Entities/Cart";
import { Client } from "../Entities/Client";
import { User } from "../Entities/User";
import { v4 as uuidv4 } from 'uuid';
import CartRepository from "../Repository/CartRepository";
import AuthHelper from "./ServiceHelper/AuthHelper";
import ServiceHelper from "./ServiceHelper/ServiceHelper";
import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";


class CartService{

    private serviceHelper = new ServiceHelper;
    private cartRepository = new CartRepository;
    private authHelper = new AuthHelper;

    async getUserCart(token: string): Promise<string>{
        const client: User = await this.authHelper.verifyJWT(token);
        return await this.cartRepository.getCart(client.id as string);
    }

    async createCart(): Promise<UUIDTypes>{
        const cart: Cart = { id: uuidv4(), totalOrder: 0, activeStatus: true, cartItemId: [], createdAt: new Date, updatedAt: new Date }
        return await this.cartRepository.createCart(cart);
    }

}

export default CartService;