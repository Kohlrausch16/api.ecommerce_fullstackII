import { Supplier } from "../Supplier";

export type Product = {
    id: string;
    name: string;
    price: number;
    height: number;
    width: number;
    length: number;
    color: string[] | string;
    description: string;
    year: string;
    stockQtd: number;
    status: boolean | number;
    supplierId: Supplier;
    createdAt: Date;
    updatedAt: Date;
}