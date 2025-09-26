import { Cart } from "../Entities/Cart";
import { Client } from "../Entities/Client";
import { ClientAdress } from "../Entities/ClientAdress";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import { User } from "../Entities/User";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";
import UserService from "./UserService";

class ClientService{

    private classConstructor = new ClassConstructorServiceHelper;
    private userService = new UserService;

    async getClients(): Promise<void>{

    }

    async getClientById(): Promise<void>{

    }

    async addClient(clientDTO: ClientDTO): Promise<ClientDTO>{

        const createdUser: User = await this.userService.addUser(clientDTO);
        
        const createdAddress: ClientAdress = await this.classConstructor.clientAdressConstructor(clientDTO.adress);

        const createdCart: Cart = await this.classConstructor.cartConstructor({id: '', totalOrder: 0, activeStatus: true, cartItems: [], createdAt: null, updatedAt: null});

        const createdClient: Client = await this.classConstructor.clientConstuctor(clientDTO, createdAddress, createdCart, createdUser);

        // persistir um Usuario;
        // persistir um Endereço;
        // persistir um Carrinho;
        //persistir classe;

        return await clientDTO;
    
    }

}

export default ClientService;