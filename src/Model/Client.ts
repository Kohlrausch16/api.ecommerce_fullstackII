import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";
import { Cart } from "./Cart";
import { ClientAdress } from "./ClientAdress";

export type Client = {
    id: UUIDTypes;
    firstName: string;
    lastName: string;
    cpf: string;
    phoneNumber: string;
    email: string;
    activeStatus: boolean;
    adressId: UUIDTypes[] | ClientAdress[]; 
    cartId: UUIDTypes[] | Cart[];
    userId: UUIDTypes[];
    createdAt: Date;
    updatedAt: Date;
}