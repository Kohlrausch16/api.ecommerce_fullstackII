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

    async getOrdersByMonth(initial: string, final: string): Promise<Order[]| string>{
        const orderList: Order[] = await this.orderRepository.getOrdersByMonth(initial, final);

        if(orderList.length < 1) return 'Não existem pedidos referentes ao período informado';
        
        return orderList; 
    }

    async getMostSoldProduct(): Promise<any>{
        return await this.orderRepository.getMostSoldProduct();
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