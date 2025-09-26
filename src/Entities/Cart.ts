import { CartItem } from "./CartItem";

export type Cart = {
    id: string;
    totalOrder: number;
    activeStatus: boolean;
    cartItems: CartItem[] | [];
    createdAt: Date | null;
    updatedAt: Date | null;
}