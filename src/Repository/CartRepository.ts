import { Cart } from "../Entities/Cart";


class CartRepository{

    private db = require('../Database/dbConfig');
    
    async getCarts(): Promise<Cart[]>{
        return await this.db.exec('SELECT * FROM cart');
    }

    async getCartById(id: string): Promise<Cart>{
        const foundData: Cart[] = await this.db.exec('SELECT * FROM cart WHERE id = ?', [id]);

        if(foundData.length < 1)
            throw new Error(`Cart ${id} not found!`);

        return foundData[0];
    }

    async addCart(cartData: Cart): Promise<Cart>{
        await this.db.exec('INSERT INTO cart (id, totalOrder, activeStatus, createdAt, updatedAt) VALUES (?, ?, ?, ? ,?)', [cartData.id, cartData.totalOrder, cartData.activeStatus, cartData.createdAt, cartData.updatedAt]);
        return this.getCartById(cartData.id);
    }

}

export default CartRepository;