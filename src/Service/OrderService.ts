import { CartItem } from "../Entities/CartItem";
import { Order } from "../Entities/Order";
import CartItemService from "../Service/CartItemService";
import OrderRepository from "../Repository/OrderRepository";
import ClientService from "./ClientService";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";

class OrderService{

    private orderRepository = new OrderRepository;
    private cartitemService = new CartItemService;
    private classConstructor = new ClassConstructorServiceHelper;
    private clientService = new ClientService;

    async getOrders(): Promise<Order[]>{
        return await this.orderRepository.getOrders();
    }

    async addOrder(cartId: string): Promise<Order>{
        const foundCartItems: CartItem[] = await this.cartitemService.getCartItemsByCartId(cartId);
        const clientId: string = await this.clientService.getClientIdByCartId(cartId);
        const createdOrder: Order = this.classConstructor.orderContstructor(foundCartItems, clientId);
        
        foundCartItems.map(async (item: CartItem) => {
            await this.cartitemService.reduceProductQtd(item);
        })

        return await this.orderRepository.addOrder(createdOrder);
    }

}

export default OrderService;