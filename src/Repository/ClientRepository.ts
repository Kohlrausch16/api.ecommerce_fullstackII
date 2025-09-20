import { Client } from "../Entities/Client";
import UserRepository from "./UserRepository";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryHelper";

class ClientRepository{

    private db = require('../Database/dbConfig');
    private userRepository = new UserRepository;

    async getClients(): Promise<Client[]>{
        return await this.db.exec('SELECT * FROM client');
    }

    async getClientById(id: string): Promise<Client>{
        return await this.db.exec('SELECT * FROM client WHERE id = ?', [id]);
    }

    async addClient(client: Client): Promise<string>{
        await this.db.exec('INSERT INTO client (id, firstName, lastName, cpf, phoneNumber, email, activeStatus, adressId, cartId, userId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [client.id, client.firstName, client.lastName, client.cpf, client.phoneNumber, client.email, client.activeStatus, client.adressId, client.cartId, client.userId, client.createdAt, client.updatedAt]);

        return repositoryURLBuilderHelper(client.id);

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