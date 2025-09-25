import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";
import { Cart } from "../Entities/Cart";

class CartRepository{

    private db = require('../Database/dbConfig');

    async getCart(id: string): Promise<Cart>{
        const foundCart: Cart[] = await this.db.exec('SELECT cartId FROM client WHERE id = ?', [id]);
        return foundCart[0];
    }

    async createCart(cart: Cart): Promise<UUIDTypes>{
        await this.db.exec('INSERT INTO cart (id, totalOrder, activeStatus, cartItemId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)', [cart.id, cart.totalOrder, cart.activeStatus, null, cart.createdAt, cart.updatedAt]);
        return cart.id;
    }

}

export default CartRepository;