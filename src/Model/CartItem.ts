import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type CartItem = {
    id: UUIDTypes;
    productQtd: number;
    totalAmount: number;
    activetatus: boolean;
    productId: UUIDTypes;
    createdAt: Date;
    updatedAt: Date;
}