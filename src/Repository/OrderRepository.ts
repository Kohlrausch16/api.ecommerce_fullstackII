import { Order } from "../Entities/Order";

class OrderRepository{

    private db = require('../Database/dbConfig');

    async getOrders(): Promise<Order[]>{
        return await this.db.exec('SELECT * FROM product_order');
    }

    async getOrdersByMonth(initial: string, final: string): Promise<Order[]>{
        return await this.db.exec('SELECT * FROM product_order WHERE createdAt >= ? AND createdAt <= ?', [initial, final]);
    }

    async getMostSoldProduct(): Promise<any>{
        return await this.db.exec('SELECT * FROM cart_item INNER JOIN product_order ON cart_item.orderId = product_order.id GROUP BY productId ORDER BY productQtd DESC');
    }

    async addOrder(order: Order): Promise<Order>{
        await this.db.exec('INSERT INTO product_order (id, totalOrder, totalItems, clientId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)', [order.id, order.totalOrder, order.totalItems, order.clientId, order.createdAt, order.updatedAt]);
        return order;
    }
}

export default OrderRepository;