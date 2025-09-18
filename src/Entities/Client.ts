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
    password: string;
    activeStatus: boolean;
    adressId: UUIDTypes[] | ClientAdress[] | undefined; 
    cartId: UUIDTypes[] | Cart[] | undefined;
    userId: UUIDTypes[] | undefined;
    createdAt: Date;
    updatedAt: Date;
}