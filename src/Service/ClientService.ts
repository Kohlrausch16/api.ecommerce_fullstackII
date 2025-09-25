import { Client } from "../Entities/Client";
import ClientRepository from "../Repository/ClientRepository";
import { v4 as uuidv4 } from 'uuid';
import ServiceHelper from "./ServiceHelper/ServiceHelper";
import { User } from "../Entities/User";
import UserService from "./UserService";
import { ClientAdress } from "../Entities/ClientAdress";
import ClientAdressService from "./ClientAdressService";

//import CartService from "./CartService";

class ClientService{

    private clientRepository = new ClientRepository;
    private userService = new UserService;
    private serviceHelper = new ServiceHelper;
    private clientAdressService = new ClientAdressService;
    //private cartService = new CartService;

    async getClients(): Promise<Client[]>{
        return await this.clientRepository.getClients();
    }

    async getClientById(id: string): Promise<Client>{
        return await this.clientRepository.getClientById(id as string);
    }

    async addClient(client: Client): Promise<string>{
        client.id = uuidv4();
        client.createdAt = new Date;
        client.updatedAt = new Date;

        const user: User = await this.serviceHelper.parseClientIntoUser(client, client.password);
        //client.cartId = await this.cartService.createCart();
        //await this.userService.addUser(user);
        client.adress = (await this.clientAdressService.addAdress(client.adress as ClientAdress));
  
        return await this.clientRepository.addClient(client as Client);
    }

    async updateClient(id: string, client: Client): Promise<string>{
        client.updatedAt = new Date;

        const user: User = await this.serviceHelper.parseClientIntoUser(client, client.password);
        const adress: ClientAdress = await this.clientAdressService.getAdressById(client.adress.id as string);

        await this.userService.updateUser(id, user);
        await this.clientAdressService.updateAdress(client.adress, adress.id as string);
        
        return await this.clientRepository.updateClient(id as string, client as Client);
    }

    async deleteClient(id: string): Promise<string>{
        const foundClient: Client = await this.getClientById(id);

        await this.userService.deleteUser(foundClient.userId as string);
        await this.clientAdressService.deleteAdress(foundClient.adress.id as string);
        
        return await this.clientRepository.deleteClient(id as string);
    }

    async patchCart(clientId: string, cartId: string): Promise<string>{
        return await this.clientRepository.patchCart(clientId as string, cartId as string);
    }
}

export default ClientService;