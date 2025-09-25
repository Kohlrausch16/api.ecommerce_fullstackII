import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";
import { Cart } from "./Cart";
import { Product } from "./Product";

export type CartItem = {
    id: UUIDTypes;
    productQtd: number;
    totalAmount: number;
    activetatus: boolean;
    productId: Product;
    cartId: Cart;
    createdAt: Date;
    updatedAt: Date;
}