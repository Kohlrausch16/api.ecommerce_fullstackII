import { CartItem } from "../Entities/CartItem";
import { v4 as uuidv4 } from "uuid";
import CartItemRepository from "../Repository/CartItemRepository";
import CartService from "./CartService";
import ProductService from "./ProductService";
import { Product } from "../Entities/Product";
import { Cart } from "../Entities/Cart";

const cartItemRepository = new CartItemRepository();

class CartItemService {

    private productService = new ProductService;
    private cartService = new CartService;

/*
    async getCartItems(): Promise<CartItem[]> {
        return await cartItemRepository.getCartItems();
    }

    async getCartItemById(id: string): Promise<CartItem | undefined> {
        return await cartItemRepository.getCartItemById(id);
    }

*/   async addCartItem(cartItemRequest: {cartId: string, productId: string, qtd: number}, token: string): Promise<CartItem> {
        const foundProduct: Product = await this.productService.getProductById(cartItemRequest.productId);
        const foundCart: any = await this.cartService.getUserCart(token);

        const cartItem: CartItem = {
            id: uuidv4(),
            productQtd: cartItemRequest.qtd,
            cartId: foundCart.value,
            productId: foundProduct.id,
            totalAmount: (foundProduct.price * cartItemRequest.qtd),
            activetatus: true, 
            createdAt: new Date(),
            updatedAt: new Date()
        };

        console.log(cartItem);
        
        return await cartItemRepository.addCartItem(cartItem);
    }

   /* async updateCartItem(id: string, updatedData: Partial<CartItem>): Promise<CartItem | undefined> {
        return await cartItemRepository.updateCartItem(id, updatedData);
    }

    async deleteCartItem(id: string): Promise<CartItem | undefined> {
        return await cartItemRepository.deleteCartItem(id);
    }

    async patchCartItemStatus(id: string): Promise<CartItem | undefined> {
        return await cartItemRepository.patchCartItemStatus(id);
    }
*/
}

export default CartItemService;