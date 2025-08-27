import { UUIDTypes } from "../../node_modules/uuid/dist/cjs/types"

export type User = {
    id: UUIDTypes;
    userName: string;
    password: string;
    permissionList: string[];
    createdAt: Date;
    updatedAt: Date;
}