import { CartItem } from "../Entities/CartItem";

class CartItemRepository{

    private db = require('../Database/dbConfig');

    async getCartItemsByCartId(id: string): Promise<CartItem[]>{
        const foundCartItems: CartItem[] = await this.db.exec('SELECT * FROM cart_item WHERE cartId = ?', [id]);

        if(foundCartItems.length < 1)
            throw new Error(`No cart iems reated to cart ${id}`);

        return foundCartItems;
    }

    async getCartItemById(id: string): Promise<CartItem>{
        const foundCartItem: CartItem[] = await this.db.exec('SELECT * FROM cart_item WHERE id = ?', [id]);

        if(foundCartItem.length < 1)
            throw new Error(`Cart Item ${id} not found`);

        return foundCartItem[0];
    }

    async addCartItem(cartItem: CartItem): Promise<CartItem>{
        await this.db.exec('INSERT INTO cart_item (id, productQtd, totalAmount, activeStatus, productId, cartId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [cartItem.id, cartItem.productQtd, cartItem.totalAmount, cartItem.activetatus, cartItem.productId, cartItem.cartId, cartItem.createdAt, cartItem.updatedAt]);

        return await this.getCartItemById(cartItem.id);
    }

}

export default CartItemRepository;