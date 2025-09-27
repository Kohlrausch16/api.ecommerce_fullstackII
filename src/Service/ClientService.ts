import { Cart } from "../Entities/Cart";
import { Client } from "../Entities/Client";
import { ClientAdress } from "../Entities/ClientAdress";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import { User } from "../Entities/User";
import ClientRepository from "../Repository/ClientRepository";
import CartService from "./CartService";
import ClientAdressService from "./ClientAdressService";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";
import UserService from "./UserService";

class ClientService{

    private classConstructor = new ClassConstructorServiceHelper;
    private userService = new UserService;
    private cartService = new CartService;
    private clientAdressService = new ClientAdressService;
    private clientRepository = new ClientRepository;

    async getClients(): Promise<Client[]>{
        /*const foundClients: Client[] = */ return await this.clientRepository.getClients();
        /*const clientsDTO: ClientDTO[] = await Promise.all(foundClients.map(item => this.getClientById(item.id)));
        return clientsDTO;*/
    }

    async getClientById(id: string): Promise<ClientDTO>{
        const foundClient: Client = await this.clientRepository.getClientById(id);
        const foundClientAdress: ClientAdress = await this.clientAdressService.getAdressById(foundClient.adressId);
        const foundUser: User = await this.userService.getUserById(foundClient.userId);
        const foundCart: Cart = await this.cartService.getCartById(foundClient.cartId);
        return await this.classConstructor.clientDTOConstructor(foundClient, foundClientAdress, foundCart, foundUser);
    }

    async addClient(clientDTO: ClientDTO): Promise<ClientDTO>{
        const createdUser: User = await this.userService.addUser(clientDTO);
        const createdCart: Cart = await this.cartService.addCart(clientDTO);
        const createdAddress: ClientAdress = await this.clientAdressService.addAdress(clientDTO);

        const createdClient: Client = await this.classConstructor.clientConstuctor(clientDTO, createdAddress, createdCart, createdUser);
        await this.clientRepository.addClient(createdClient);

        return await this.getClientById(createdClient.id);    
    }

}

export default ClientService;