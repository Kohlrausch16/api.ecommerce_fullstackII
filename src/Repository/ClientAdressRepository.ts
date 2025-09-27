import { ClientAdress } from "../Entities/ClientAdress";

class ClientAdressRepository{

    private db = require('../Database/dbConfig');
    
    async getAdresses():Promise<ClientAdress[]>{
         return await this.db.exec('SELECT * FROM client_adress');
    }

    async getAdressById(id: string): Promise<ClientAdress>{
        const foundData: ClientAdress[] = await this.db.exec('SELECT * FROM client_adress WHERE id = ?', [id]);
        
        if(foundData.length < 1)
            throw new Error(`Client adress ${id} not found!`);

        return foundData[0];
    }

    async addAdress(adress: ClientAdress): Promise<ClientAdress>{
        await this.db.exec('INSERT INTO client_adress (id, rua, numero, bairro, cidade, uf, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [adress.id, adress.street, adress.number, adress.block, adress.city, adress.state, adress.createdAt, adress.updatedAt]);

        return await this.getAdressById(adress.id);
    }
}

export default ClientAdressRepository;