import { Cart } from "../Entities/Cart";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import CartItemRepository from "../Repository/CartItemRepository";
import CartRepository from "../Repository/CartRepository";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";


class CartService{

    private cartRepository = new CartRepository;
    private classConstructor = new ClassConstructorServiceHelper;
    private cartItemRepository = new CartItemRepository;

    async getCarts(): Promise<Cart[]>{
        return await this.cartRepository.getCarts();
    }

    async getCartById(id: string): Promise<Cart>{
        const foundCart = await this.cartRepository.getCartById(id);
        foundCart.cartItems = await this.cartItemRepository.getCartItemsByCartId(foundCart.id);

        for(let i = 0; i < foundCart.cartItems.length; i++){
            foundCart.totalOrder = foundCart.totalOrder + foundCart.cartItems[i].totalAmount;
        }

        return foundCart;
    }

    async addCart(clientDTO: ClientDTO): Promise<Cart>{
        const createdCart: Cart = await this.classConstructor.cartConstructor({id: '', totalOrder: 0, activeStatus: true, cartItems: [], createdAt: null, updatedAt: null});
        await this.cartRepository.addCart(createdCart);
        return createdCart;
    }

    async deleteCart(id: string): Promise<string>{
        return await this.cartRepository.deleteCart(id);
    }

}

export default CartService;