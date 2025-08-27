import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type Client = {
    id: UUIDTypes;
    firstName: string;
    lastName: string;
    cpf: string;
    phoneNumber: string;
    email: string;
    activeStatus: boolean;
    adressId: UUIDTypes[]; 
    cartId: UUIDTypes[];
    userId: UUIDTypes[];
    createdAt: Date;
    updatedAt: Date;
}