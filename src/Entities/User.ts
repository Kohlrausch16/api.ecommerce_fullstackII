
export type User = {
    id: string;
    userName: string;
    email: string;
    password: string;
    permissionList: string[] | string;
    createdAt: string | null;
    updatedAt: string | null;
}