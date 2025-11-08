import { CartItem } from "../Entities/CartItem";

class CartItemRepository{

    private db = require('../Database/dbConfig');

    async getCartItemsByCartId(id: string): Promise<CartItem[]>{
        return await this.db.exec('SELECT * FROM cart_item WHERE cartId = ?', [id]);
    }

    async getCartItemById(id: string): Promise<CartItem>{
        const foundCartItem: CartItem[] = await this.db.exec('SELECT * FROM cart_item WHERE id = ?', [id]);

        if(foundCartItem.length < 1)
            throw new Error(`Cart Item ${id} not found`);

        return foundCartItem[0];
    }

    async setCartItemToOrder(orderId: string, cartItem: string){
        await this.db.exec('UPDATE cart_item SET orderId = ? WHERE id = ?', [orderId, cartItem]);
    }

    async addCartItem(cartItem: CartItem): Promise<CartItem>{
        await this.db.exec('INSERT INTO cart_item (id, productQtd, totalAmount, activeStatus, productId, cartId orderId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [cartItem.id, cartItem.productQtd, cartItem.totalAmount, cartItem.activetatus, cartItem.productId, cartItem.cartId, cartItem.orderId, cartItem.createdAt, cartItem.updatedAt]);

        return await this.getCartItemById(cartItem.id);
    }

    async updateCartItemProductQtd(id: string, newQtd: string, newPrice: number): Promise<CartItem>{
        await this.db.exec('UPDATE cart_item SET productQtd = ?, totalAmount = ? WHERE id = ?', [newQtd, newPrice, id]);

        return await this.getCartItemById(id);
    }

    async deleteCartItem(id: string): Promise<string>{
        await this.db.exec('DELETE FROM cart_item WHERE id = ?', [id]);
        return `Cart Item ${id} delted successfully!`;
    }

}

export default CartItemRepository;