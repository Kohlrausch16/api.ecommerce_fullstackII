import { Client } from "../Entities/Client";
import ClientRepository from "../Repository/ClientRepository";
import { v4 as uuidv4 } from 'uuid';
import ServiceHelper from "./ServiceHelper/ServiceHelper";
import { User } from "../Entities/User";
import UserService from "./UserService";

class ClientService{

    private clientRepository = new ClientRepository;
    private userService = new UserService;
    private serviceHelper = new ServiceHelper;

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

        const user: User = this.serviceHelper.parseClientIntoUser(client, client.password);
    
        await this.userService.addUser(user);
        return await this.clientRepository.addClient(client as Client);
    }

    async updateClient(id: string, client: Client): Promise<string>{
        return await this.clientRepository.updateClient(id as string, client as Client);
    }

    async deleteClient(id: string): Promise<string>{
        return await this.clientRepository.deleteClient(id as string);
    }

    async patchClientStatus(id: string): Promise<string>{
        return await this.clientRepository.patchClientStatus(id as string);
    }

    async patchCart(clientId: string, cartId: string): Promise<string>{
        return await this.clientRepository.patchCart(clientId as string, cartId as string);
    }
}

export default ClientService;