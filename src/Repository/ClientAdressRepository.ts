import { ClientAdress } from "../Entities/ClientAdress";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryHelper";

class ClientAdressRepository{

    private db = require('../Database/dbConfig');

    async getAdressById(id: string): Promise<ClientAdress>{
        const foundAdress: ClientAdress[] = await this.db.exec('SELECT * FROM client_adress WHERE id = ?', [id]);

        if(foundAdress.length < 1)
            throw new Error(`Adress ${id} not found!`);

        return foundAdress[0];
    }

    async addAdress(adress: ClientAdress): Promise<string>{
        await this.db.exec('INSERT INTO client_adress (id, rua, numero, bairro, cidade, uf, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [adress.id, adress.street, adress.number, adress.block, adress.city, adress.state, adress.createdAt, adress.updatedAt]);
        return await repositoryURLBuilderHelper(adress.id);
    }

    async updateAdress(adress: ClientAdress, id: string){
        await this.db.exec('UPDATE client_adress SET (rua = ?, numero = ?, bairro = ?, cidade = ?, uf = ?, updatedAt = ? WHERE id = ?)', [adress.street, adress.number, adress.block, adress.city, adress.updatedAt, id]);
        return await repositoryURLBuilderHelper(id);
    }

    async deleteAdress(id: string): Promise<string>{
        await this.getAdressById(id);
        await this.db.exec('DELETE FROM client_adress WHERE id = ?', [id]);
        return `Adress ${id} deleted!`
    }

}

export default ClientAdressRepository;