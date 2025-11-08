import { CartItem } from "../Entities/CartItem";
import { Order } from "../Entities/Order";
import CartItemRepository from "../Repository/CartItemRepository";
import OrderRepository from "../Repository/OrderRepository";

class OrderService{

    private orderRepository = new OrderRepository;
    private cartitemRepository = new CartItemRepository;

    async getOrders(): Promise<Order[]>{
        return await this.orderRepository.getOrders();
    }

    async addOrder(cartId: string): Promise<void>{
        const foundCartItems: CartItem[] = await this.cartitemRepository.getCartItemsByCartId(cartId);

        console.log(foundCartItems);



        //return await this.orderRepository.addOrder(ca);
    }


}

export default OrderService;