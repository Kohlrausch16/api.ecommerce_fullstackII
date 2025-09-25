import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";
import { CartItem } from "./CartItem";

export type Cart = {
    id: UUIDTypes;
    totalOrder: number;
    activeStatus: boolean;
    cartItemId: CartItem[];
    createdAt: Date;
    updatedAt: Date;
}