import { Client } from "../Model/Client";
import ClientRepository from "../Repository/ClientRepository";

class ClientService{

    private clientRepository = new ClientRepository;

    async getClients(): Promise<Client[]>{
        return await this.clientRepository.getClients();
    }

    async getClientById(id: string): Promise<Client>{
        return await this.clientRepository.getClientById(id as string);
    }

    async addClient(client: Client): Promise<string>{
        return await this.clientRepository.getAddClient(client as Client);
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