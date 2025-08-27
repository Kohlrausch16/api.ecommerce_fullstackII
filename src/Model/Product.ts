import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type Product = {
    id: UUIDTypes;
    name: string;
    price: number;
    height: number;
    width: number;
    length: number;
    color: string[];
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: UUIDTypes;
}