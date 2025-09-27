import { Cart } from "../Entities/Cart";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import CartRepository from "../Repository/CartRepository";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";


class CartService{

    private cartRepository = new CartRepository;
    private classConstructor = new ClassConstructorServiceHelper;

    async getCarts(): Promise<Cart[]>{
        return await this.cartRepository.getCarts();
    }

    async getCartById(id: string): Promise<Cart>{
        return await this.cartRepository.getCartById(id);
    }

    async addCart(clientDTO: ClientDTO): Promise<Cart>{
        const createdCart: Cart = await this.classConstructor.cartConstructor({id: '', totalOrder: 0, activeStatus: true, cartItems: [], createdAt: null, updatedAt: null});

        await this.cartRepository.addCart(createdCart);

        return createdCart;
    }
}

export default CartService;