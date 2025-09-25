import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";
import { Product } from "./Product";

export type CartItem = {
    id: UUIDTypes;
    productQtd: number;
    totalAmount: number;
    activetatus: boolean;
    productId: UUIDTypes | Product;
    cartId: UUIDTypes | string;
    createdAt: Date;
    updatedAt: Date;
}