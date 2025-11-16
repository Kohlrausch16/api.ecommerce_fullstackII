import { CartItem } from "./CartItem";

export type Cart = {
    id: string;
    totalOrder: number;
    activeStatus: boolean;
    cartItems: CartItem[] | null;
    createdAt: string | null;
    updatedAt: string | null;
}