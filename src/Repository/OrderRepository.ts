import { Order } from "../Entities/Order";

class OrderRepository{

    private db = require('../Database/dbConfig');

    async getOrders(): Promise<Order[]>{
        return await this.db.exec('SELECT * FROM product_order');
    }

    async addOrder(order: Order): Promise<Order>{
        await this.db.exec('INSERT INTO product_order (id, totalOrder, totalItems, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)', [order.id, order.totalOrder, order.totalItems, order.createdAt, order.updatedAt]);
        return order;
    }


}

export default OrderRepository;