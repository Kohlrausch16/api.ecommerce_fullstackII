import { ClientAdress } from "../../Entities/ClientAdress";
import { User } from "../../Entities/User";
import { v4 as uuidv4 } from 'uuid';
import ServiceHelper from "./ServiceHelper";
import { Cart } from "../../Entities/Cart";
import { ClientDTO } from "../../Entities/DTO/ClientDTO";
import { Client } from "../../Entities/Client";

class ClassConstructorServiceHelper{

    private authHelper = new ServiceHelper;
    private clientUserPermissions = "get-products, get-product-by-id";

    async userConstructor(userData: User): Promise<User>{
        userData.id = uuidv4();
        userData.permissionList = this.clientUserPermissions;
        userData.createdAt = new Date;
        userData.updatedAt = new Date;
        userData.password = await this.authHelper.hashPassword(userData.password);

        return userData;
    }

    async clientAdressConstructor(adressData: ClientAdress): Promise<ClientAdress>{
        adressData.id = uuidv4();
        adressData.createdAt = new Date;
        adressData.updatedAt = new Date;

        return adressData;
    }

    async cartConstructor(cartData: Cart): Promise<Cart>{
        cartData.id = uuidv4();
        cartData.createdAt = new Date;
        cartData.updatedAt = new Date;

        return cartData;
    }

    async clientConstuctor(clientDTO: ClientDTO, adressData: ClientAdress, cartData: Cart, userData: User): Promise<Client>{
        const clientData: Client = {
            id: uuidv4(),
            firstName: clientDTO.firstName,
            lastName: clientDTO.lastName,
            cpf: clientDTO.cpf,
            phoneNumber: clientDTO.password,
            email: clientDTO.email,
            password: 'not informed!',
            activeStatus: clientDTO.activeStatus,
            adress: adressData.id, 
            cartId: cartData.id,
            userId: userData.id,
            createdAt: new Date,
            updatedAt: new Date
        };
        
        return clientData;
    }
}

export default ClassConstructorServiceHelper;