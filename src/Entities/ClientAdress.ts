import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type ClientAdress = {
    id: UUIDTypes;
    street: string;
    number: string;
    block: string;
    city: string;
    state: string;
    createdAt: Date;
    updatedAt: Date;
}