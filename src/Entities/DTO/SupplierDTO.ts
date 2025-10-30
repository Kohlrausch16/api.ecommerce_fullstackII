import { ClientAdress } from "../ClientAdress";

export type Supplier = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cnpj: string;
    adressId: ClientAdress;
}