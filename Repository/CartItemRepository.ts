/*import { CartItem } from "../Entities/CartItem";

class CartItemRepository {
    private cartItems: CartItem[] = [];

    async getCartItems(): Promise<CartItem[]> {
        return this.cartItems;
    }

    async getCartItemById(id: string): Promise<CartItem | undefined> {
        return this.cartItems.find(item => item.id === id);
    }

    async addCartItem(cartItem: CartItem): Promise<CartItem> {
        this.cartItems.push(cartItem);
        return cartItem;
    }

    async updateCartItem(id: string, updatedData: Partial<CartItem>): Promise<CartItem | undefined> {
        const index = this.cartItems.findIndex(item => item.id === id);
        if (index === -1) return undefined;

        this.cartItems[index] = { ...this.cartItems[index], ...updatedData, updatedAt: new Date() };
        return this.cartItems[index];
    }

    async deleteCartItem(id: string): Promise<CartItem | undefined> {
        const index = this.cartItems.findIndex(item => item.id === id);
        if (index === -1) return undefined;

        const deleted = this.cartItems[index];
        this.cartItems.splice(index, 1);
        return deleted;
    }

    async patchCartItemStatus(id: string): Promise<CartItem | undefined> {
        const cartItem = await this.getCartItemById(id);
        if (!cartItem) return undefined;

        cartItem.activetatus = !cartItem.activetatus;
        cartItem.updatedAt = new Date();
        return cartItem;
    }
}

export default CartItemRepository;*/