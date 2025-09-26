import { Cart } from "../Cart";
import { ClientAdress } from "../ClientAdress";
import { User } from "../User";

export type ClientDTO = {
    id: string;
    firstName: string;
    lastName: string;
    cpf: string;
    phoneNumber: string;
    email: string;
    password: string;
    activeStatus: boolean;
    adress: ClientAdress; 
    cart: Cart
    user: User;
    createdAt: Date;
    updatedAt: Date;
}