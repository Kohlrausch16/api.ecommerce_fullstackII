import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types";

export type ClientAdress = {
    id: UUIDTypes;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    createdAt: Date;
    updatedAt: Date;
}