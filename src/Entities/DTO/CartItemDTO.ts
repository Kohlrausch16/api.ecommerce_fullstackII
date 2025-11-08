import { Order } from "../Order";
import { Product } from "../Product";

export type CartItemDTO = {
    id: string;
    productQtd: number;
    totalAmount: number;
    activetatus: boolean;
    productId: Product;
    cartId: string;
    //orderId: Order;
    createdAt: Date;
    updatedAt: Date;
}