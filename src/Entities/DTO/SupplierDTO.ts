import { ClientAdress } from "../ClientAdress";

export type SupplierDTO = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cnpj: string;
    adress: ClientAdress;
    createdAt: Date;
    updatedAt: Date;
}