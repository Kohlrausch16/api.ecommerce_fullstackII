import { ClientAdress } from "../Entities/ClientAdress";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import ClientAdressRepository from "../Repository/ClientAdressRepository";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";

class ClientAdressService{

    private clientAdressRepository = new ClientAdressRepository;
    private classConstructor = new ClassConstructorServiceHelper;

    async getAdresses(): Promise<ClientAdress[]>{
        return await this.clientAdressRepository.getAdresses();
    }

    async getAdressById(id: string): Promise<ClientAdress>{
        return await this.clientAdressRepository.getAdressById(id);
    }

    async addAdress(clientDTO: ClientDTO): Promise<ClientAdress>{
        const createdAddress: ClientAdress = await this.classConstructor.clientAdressConstructor(clientDTO.adress as ClientAdress);
        return await this.clientAdressRepository.addAdress(createdAddress);
    }

    async updateAdress(id: string, adress: ClientAdress): Promise<ClientAdress>{
        return adress;
    }

    async deleteAdress(id: string): Promise<string>{
        return await this.clientAdressRepository.deleteAdress(id);
    }

}

export default ClientAdressService;