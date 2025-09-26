export type Client = {
    id: string;
    firstName: string;
    lastName: string;
    cpf: string;
    phoneNumber: string;
    email: string;
    password: string;
    activeStatus: boolean;
    adress: string; 
    cartId: string;
    userId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}