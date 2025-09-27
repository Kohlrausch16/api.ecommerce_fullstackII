import { Cart } from "../Entities/Cart";
import { Client } from "../Entities/Client";
import { ClientAdress } from "../Entities/ClientAdress";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import { User } from "../Entities/User";
import CartService from "./CartService";
import ClientAdressService from "./ClientAdressService";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";
import UserService from "./UserService";

class ClientService{

    private classConstructor = new ClassConstructorServiceHelper;
    private userService = new UserService;
    private cartService = new CartService;
    private clientAdressService = new ClientAdressService;

    async getClients(): Promise<void>{

    }

    async getClientById(): Promise<void>{

    }

    async addClient(clientDTO: ClientDTO): Promise<Client>{
        const createdUser: User = await this.userService.addUser(clientDTO);
        const createdCart: Cart = await this.cartService.addCart(clientDTO);
        const createdAddress: ClientAdress = await this.clientAdressService.addAdress(clientDTO);
        
        const createdClient: Client = await this.classConstructor.clientConstuctor(clientDTO, createdAddress, createdCart, createdUser);

    
        return await createdClient;
    
    }

}

export default ClientService;