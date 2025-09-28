import { Product } from "./Product";

export type CartItem = {
    id: string;
    productQtd: number;
    totalAmount: number;
    activetatus: boolean;
    productId: string;
    cartId: string;
    createdAt: Date;
    updatedAt: Date;
}