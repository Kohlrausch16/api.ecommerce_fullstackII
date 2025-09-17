/*import { CartItem } from "../Entities/CartItem";
import { v4 as uuidv4 } from "uuid";
import CartItemRepository from "../Repository/CartItemRepository";

const cartItemRepository = new CartItemRepository();

class CartItemService {
    async getCartItems(): Promise<CartItem[]> {
        return await cartItemRepository.getCartItems();
    }

    async getCartItemById(id: string): Promise<CartItem | undefined> {
        return await cartItemRepository.getCartItemById(id);
    }

    async addCartItem(cartItemData: Omit<CartItem, "id" | "createdAt" | "updatedAt">): Promise<CartItem> {
        const newCartItem: CartItem = {
            id: uuidv4(),
            ...cartItemData,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        return await cartItemRepository.addCartItem(newCartItem);
    }

    async updateCartItem(id: string, updatedData: Partial<CartItem>): Promise<CartItem | undefined> {
        return await cartItemRepository.updateCartItem(id, updatedData);
    }

    async deleteCartItem(id: string): Promise<CartItem | undefined> {
        return await cartItemRepository.deleteCartItem(id);
    }

    async patchCartItemStatus(id: string): Promise<CartItem | undefined> {
        return await cartItemRepository.patchCartItemStatus(id);
    }
}

export default CartItemService;*/