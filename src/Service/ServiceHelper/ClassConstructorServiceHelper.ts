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
            password: '***************',
            activeStatus: clientDTO.activeStatus,
            adressId: adressData.id, 
            cartId: cartData.id,
            userId: userData.id,
            createdAt: new Date,
            updatedAt: new Date
        };
        
        return clientData;
    }

    async clientDTOConstructor(client: Client, adress: ClientAdress, cart: Cart, user: User): Promise<ClientDTO>{
        const clientDTO: ClientDTO = {
            id: client.id,
            firstName: client.firstName,
            lastName: client.lastName,
            cpf: client.cpf,
            phoneNumber: client.phoneNumber,
            email: client.email,
            password: client.password,
            activeStatus: client.activeStatus,
            user: user,
            adress: adress,
            cart: cart,
            createdAt: client.createdAt as Date,
            updatedAt: client.updatedAt as Date
        }

        return clientDTO;
    }

    async updateClientConstructor(client: Client, clientDTO: ClientDTO): Promise<Client>{
        client.firstName = clientDTO.firstName;
        client.lastName = clientDTO.lastName;
        client.cpf = clientDTO.cpf;
        client.phoneNumber = clientDTO.phoneNumber;
        client.email = clientDTO.email;
        client.activeStatus = clientDTO.activeStatus;
        client.updatedAt = new Date;

        return client;
    }

    async updateUserConstructor(user: User, clientDTO: ClientDTO): Promise<User>{
        user.userName = clientDTO.firstName + ' ' + clientDTO.lastName;
        user.email = clientDTO.email;
        user.password = await this.authHelper.hashPassword(clientDTO.password);
        user.updatedAt = new Date;

        return user;
    }

    async updateClientAdressConstructor(adress: ClientAdress, adressDTO: ClientAdress): Promise<ClientAdress>{
        adress.street = adressDTO.street;
        adress.number = adressDTO.number;
        adress.block = adressDTO.block;
        adress.city = adressDTO.city;
        adress.state = adressDTO.state;
        adress.updatedAt = new Date;

        return adress;
    }
}

export default ClassConstructorServiceHelper;