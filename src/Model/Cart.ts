import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type Cart = {
    id: UUIDTypes;
    totalOrder: number;
    activeStatus: boolean;
    cartItemId: UUIDTypes[];
    createdAt: Date;
    updatedAt: Date;
}