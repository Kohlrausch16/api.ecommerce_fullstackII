import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type Product = {
    id: UUIDTypes;
    name: string;
    price: number;
    height: number;
    width: number;
    length: number;
    color: string[] | string;
    description: string;
    year: string;
    status: boolean | number;
    createdAt: Date;
    updatedAt: Date;
    userId: UUIDTypes;
}