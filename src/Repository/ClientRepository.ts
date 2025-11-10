import { Client } from "../Entities/Client";

class ClientRepository{

    private db = require('../Database/dbConfig');

    async getClients(): Promise<Client[]>{
        return await this.db.exec('SELECT * FROM client');
    }

    async getClientById(id: string): Promise<Client>{
        const foundData: Client[] = await this.db.exec('SELECT * FROM client WHERE id = ?', [id]);

        if(foundData.length < 1)
            throw new Error(`Client ${id} not found`);

        return foundData[0];
    }

    async getClientIdByCartId(cartId: string): Promise<string>{
        const foundCartId: string[] = await this.db.exec('SELECT id FROM client WHERE cartId = ?', [cartId]);
        return foundCartId[0];
    }

    async getClientByCPF(cpf: string): Promise<void>{
        const foundData: Client[] = await this.db.exec('SELECT * FROM client WHERE cpf = ?', [cpf]);

        if(foundData.length >= 1)
            throw new Error(`CPF ${cpf} already registred`);
    }

    async getClientByEmail(email: string): Promise<void>{
        const foundData: Client[] = await this.db.exec('SELECT * FROM client WHERE email = ?', [email]);

        if(foundData.length >= 1)
            throw new Error(`Email ${email} already registred`);

    }

    async addClient(clientData: Client): Promise<Client>{
        await this.getClientByCPF(clientData.cpf);
        await this.getClientByEmail(clientData.email);

        await this.db.exec('INSERT INTO client (id, firstName, lastName, cpf, phoneNumber, email, password, activeStatus, adressId, cartId, userId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [clientData.id, clientData.firstName, clientData.lastName, clientData.cpf, clientData.phoneNumber, clientData.email, clientData.password, clientData.activeStatus, clientData.adressId, clientData.cartId, clientData.userId, clientData.createdAt, clientData.updatedAt]);

        return await this.getClientById(clientData.id);
    }
    
    async updateClient(id: string, clientData: Client): Promise<Client>{
        await this.db.exec('UPDATE client SET firstName = ?, lastName = ?, cpf = ?, phoneNumber = ?, email = ?, password = ?, activeStatus = ?, adressId = ?, cartId = ?, userId = ?, updatedAt = ? WHERE id = ?', [clientData.firstName, clientData.lastName, clientData.cpf, clientData.phoneNumber, clientData.email, clientData.password ,clientData.activeStatus, clientData.adressId, clientData.cartId, clientData.userId, clientData.updatedAt, id]);

        return await this.getClientById(clientData.id);
    }

    async deleteClient(id: string): Promise<string>{
        await this.getClientById(id);
        await this.db.exec('DELETE FROM client WHERE id = ?', [id]);
        return `Client ${id} deleted succressfully!`;
    }

}

export default ClientRepository;