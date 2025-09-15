import { Client } from "../Model/Client";


class ClientRepository{

    private db = require('../Database/dbConfig');

    async getClients(): Promise<Client[]>{
        return this.db;
    }

    async getClientById(id: string): Promise<Client>{
        return this.db[0];
    }

    async getAddClient(client: Client): Promise<string>{
        return 'Cliente criado com sucesso :)';
    }

    async updateClient(id: string, client: Client): Promise<string>{
        return 'Cliente atualizado com sucesso :)';
    }

    async deleteClient(id: string): Promise<string>{
        return `Cliente ${id} deletado com sucesso :)`;
    }

    async patchClientStatus(id: string): Promise<string>{
        return `Status do cliente ${id} alterado com sucesso :)`;
    }

    async patchCart(clientId: string, cartId: string): Promise<string>{
        return `Novo carrinho ${cartId} adicionado ao carrinho do cliente ${clientId} :)`;
    }

}

export default ClientRepository;