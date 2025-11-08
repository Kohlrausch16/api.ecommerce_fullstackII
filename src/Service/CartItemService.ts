import { CartItem } from "../Entities/CartItem";
import { CartItemDTO } from "../Entities/DTO/CartItemDTO";
import { Product } from "../Entities/Product";
import CartItemRepository from "../Repository/CartItemRepository";
import CartService from "./CartService";
import ProductService from "./ProductService";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";

class CartItemService{

    private cartItemRepository = new CartItemRepository;
    private productService = new ProductService;
    private cartService = new CartService;
    private classConstructor = new ClassConstructorServiceHelper;

    async getCartItemsByCartId(id: string): Promise<CartItem[]>{
        return await this.cartItemRepository.getCartItemsByCartId(id);
    }

    async getCartItemById(id: string): Promise<CartItemDTO>{
        const foundCartItem: CartItem = await this.cartItemRepository.getCartItemById(id);
        const foundProduct: Product = await this.productService.getProductById(foundCartItem.productId);

        return await this.classConstructor.cartItemDTOConstructor(foundCartItem, foundProduct);
    }

    async addCartItem(cartItem: CartItem): Promise<CartItemDTO>{
        const foundProduct: Product = await this.productService.getProductById(cartItem.productId);
        await this.cartService.getCartById(cartItem.cartId);
        cartItem = await this.classConstructor.cartItemConstructor(cartItem, foundProduct);
        await this.cartItemRepository.addCartItem(cartItem);
        return await this.getCartItemById(cartItem.id);
    }

    async setCartItemToOrder(orderId: string, cartItemId: string[]): Promise<void>{
        cartItemId.map(async (cartItem: string) => {
            await this.cartItemRepository.setCartItemToOrder(orderId, cartItem);
        });
    }

    async updateCartItemProductQtd(id: string, newQtd: string):Promise<CartItem>{
        const foundCartItem: CartItem = await this.cartItemRepository.getCartItemById(id);
        const foundProduct: Product = await this.productService.getProductById(foundCartItem.productId);

        return await this.cartItemRepository.updateCartItemProductQtd(id, newQtd, (parseInt(newQtd) * foundProduct.price));
    }

    async deleteCartitem(id: string): Promise<string>{
        return await this.cartItemRepository.deleteCartItem(id);
    }
}

export default CartItemService;