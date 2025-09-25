import { ClientAdress } from "../Entities/ClientAdress";
import ClientAdressRepository from "../Repository/ClientAdressRepository";
import { v4 as uuidv4 } from 'uuid';

class ClientAdressService{

    private clientAdressRepository = new ClientAdressRepository;

    async getAdressById(id: string): Promise<ClientAdress>{
        return await this.clientAdressRepository.getAdressById(id);
    }

    async addAdress(adress: ClientAdress): Promise<ClientAdress>{
        adress.id = uuidv4();
        adress.createdAt = new Date;
        adress.updatedAt = new Date;

        await this.clientAdressRepository.addAdress(adress);
        return await this.clientAdressRepository.getAdressById(adress.id as string);
    }

    async updateAdress(adress: ClientAdress, id: string){
        adress.updatedAt = new Date;
        await this.clientAdressRepository.addAdress(adress);
        return await this.clientAdressRepository.getAdressById(adress.id as string);
    }

    async deleteAdress(id: string){
        return await this.clientAdressRepository.deleteAdress(id);
    }

}

export default ClientAdressService;