
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
    status: boolean | number;
    createdAt: Date;
    updatedAt: Date;
}