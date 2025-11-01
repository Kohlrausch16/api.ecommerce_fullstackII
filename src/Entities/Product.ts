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
    supplierId: string;
    createdAt: Date;
    updatedAt: Date;
}