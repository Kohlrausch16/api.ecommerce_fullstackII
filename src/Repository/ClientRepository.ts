import { Client } from "../Entities/Client";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryHelper";

class ClientRepository{

    private db = require('../Database/dbConfig');

    async getClients(): Promise<Client[]>{
        return await this.db.exec('SELECT * FROM client');
    }

    async getClientById(id: string): Promise<Client>{
        const foundClient = await this.db.exec('SELECT * FROM client WHERE id = ?', [id]);

        if(foundClient.length < 1)
            throw new Error (`Cliente ${id} não encontrado`);

        return foundClient;
    }

    async addClient(client: Client): Promise<string>{
        await this.db.exec('INSERT INTO client (id, firstName, lastName, cpf, phoneNumber, email, activeStatus, adressId, cartId, userId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [client.id, client.firstName, client.lastName, client.cpf, client.phoneNumber, client.email, client.activeStatus, client.adressId, client.cartId, client.userId, client.createdAt, client.updatedAt]);

        return repositoryURLBuilderHelper(client.id);
    }

    async updateClient(id: string, client: Client): Promise<string>{
        await this.getClientById(id);
        await this.db.exec('UPDATE client SET firstName = ?, lastName = ?, cpf = ?, phoneNumber = ?, email = ?, activeStatus = ?, adressId = ?, cartId = ?, userId = ?, updatedAt = ? WHERE id = ?', [client.firstName, client.lastName, client.cpf, client.phoneNumber, client.email, client.activeStatus, client.adressId, client.cartId, client.userId, client.updatedAt, id]);
        
        return repositoryURLBuilderHelper(id);
    }

    async deleteClient(id: string): Promise<string>{
        await this.db.exec('DELETE FROM client WHERE id = ?', [id]);
        return `Cliente ${id} deletado com sucesso!`;
    }

    async patchCart(clientId: string, cartId: string): Promise<string>{
        return `Novo carrinho ${cartId} adicionado ao carrinho do cliente ${clientId} :)`;
    }

}

export default ClientRepository;