import { Cart } from "../Entities/Cart";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import CartRepository from "../Repository/CartRepository";
import CartItemService from "./CartItemService";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";


class CartService{

    private cartRepository = new CartRepository;
    private classConstructor = new ClassConstructorServiceHelper;
    private cartItemService = new CartItemService;

    async getCarts(): Promise<Cart[]>{
        return await this.cartRepository.getCarts();
    }

    async getCartById(id: string): Promise<Cart>{
        const foundCart = await this.cartRepository.getCartById(id);
        foundCart.cartItems = await this.cartItemService.getCartItemsByCartId(foundCart.id);
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