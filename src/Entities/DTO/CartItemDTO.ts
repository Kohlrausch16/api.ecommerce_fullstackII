import { Product } from "../Product";

export type CartItemDTO = {
    id: string;
    productQtd: number;
    totalAmount: number;
    activetatus: boolean;
    productId: Product;
    cartId: string;
    createdAt: Date;
    updatedAt: Date;
}