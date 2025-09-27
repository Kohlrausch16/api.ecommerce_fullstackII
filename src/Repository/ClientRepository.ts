import { Client } from "../Entities/Client";

class ClientRepository{

    private db = require('../Database/dbConfig');

    async getClients(): Promise<Client[]>{
        return await this.db.exec('SELECT * FROM client');
    }

    async getClientById(id: string): Promise<Client>{
        const foundData: Client[] = await this.db.exec('');

        if(foundData.length < 1)
            throw new Error(`Client ${id} not found`);

        return foundData[0];
    }

    

}

export default ClientRepository;