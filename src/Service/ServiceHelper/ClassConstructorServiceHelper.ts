import { ClientAdress } from "../../Entities/ClientAdress";
import { User } from "../../Entities/User";
import { v4 as uuidv4 } from 'uuid';
import ServiceHelper from "./ServiceHelper";
import { Cart } from "../../Entities/Cart";
import { ClientDTO } from "../../Entities/DTO/ClientDTO";
import { Client } from "../../Entities/Client";
import { CartItem } from "../../Entities/CartItem";
import { Product } from "../../Entities/Product";
import { CartItemDTO } from "../../Entities/DTO/CartItemDTO";
import { SupplierDTO } from "../../Entities/DTO/SupplierDTO";
import { Supplier } from "../../Entities/Supplier";
import { Order } from "../../Entities/Order";

class ClassConstructorServiceHelper{

    private authHelper = new ServiceHelper;
    private clientUserPermissions = "get-client-by-id,put-client,delete-client,get-cart-by-id,get-cart-item-by-id,add-cart-item,put-cart-item,delete-cart-item,get-products,get-product-by-id";

    async userConstructor(userData: User): Promise<User>{
        userData.id = uuidv4();
        userData.permissionList = this.clientUserPermissions;
        userData.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 19);
        userData.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);
        userData.password = await this.authHelper.hashPassword(userData.password);

        return userData;
    }

    async clientAdressConstructor(adressData: ClientAdress): Promise<ClientAdress>{
        adressData.id = uuidv4();
        adressData.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 19);
        adressData.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

        return adressData;
    }

    async cartConstructor(cartData: Cart): Promise<Cart>{
        cartData.id = uuidv4();
        cartData.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 19);
        cartData.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

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
            createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            updatedAt: new Date().toISOString().replace('T', ' ').substring(0, 19)
        };
        
        return clientData;
    }

    orderContstructor(cartItems: CartItem[], clientId: string): Order{
        
        const createdOrder: Order = {
            id: uuidv4(),
            totalOrder: cartItems.reduce((total: number, item: CartItem) =>  total + item.totalAmount, 0),
            totalItems: cartItems.reduce((total: number, item: CartItem) => total + item.productQtd, 0),
            clientId: clientId,
            createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            updatedAt: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }

        return createdOrder;
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
            createdAt: client.createdAt as string,
            updatedAt: client.updatedAt as string
        }
        return clientDTO;
    }

    async supplierDTOConstructor(supplier: Supplier, adress: ClientAdress): Promise<SupplierDTO>{
        const supplierDTO: SupplierDTO = {
            id: supplier.id,
            name: supplier.name,
            email: supplier.email,
            phone: supplier.phone,
            cnpj: supplier.cnpj,
            adress: adress,
            createdAt: supplier.createdAt as string,
            updatedAt: supplier.updatedAt as string
        }

        return supplierDTO;
    }

    async cartItemConstructor(cartItem: CartItem, product: Product): Promise<CartItem>{
        cartItem.id = uuidv4();
        cartItem.totalAmount = product.price * cartItem.productQtd;
        cartItem.createdAt = new Date().toISOString().replace('T', ' ').substring(0, 19);
        cartItem.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

        return cartItem;
    }

    async cartItemDTOConstructor(cartItem: CartItem, product: Product): Promise<CartItemDTO>{
        const cartItemDTO: CartItemDTO = {
            id: cartItem.id,
            productQtd: cartItem.productQtd,
            totalAmount: cartItem.productQtd* product.price, 
            activetatus: cartItem.activetatus, 
            productId: product, 
            cartId: cartItem.cartId,
            createdAt: cartItem.createdAt,
            updatedAt: cartItem.updatedAt
        }

        return cartItemDTO;
    }
    
    async updateClientConstructor(client: Client, clientDTO: ClientDTO): Promise<Client>{
        client.firstName = clientDTO.firstName;
        client.lastName = clientDTO.lastName;
        client.cpf = clientDTO.cpf;
        client.phoneNumber = clientDTO.phoneNumber;
        client.email = clientDTO.email;
        client.activeStatus = clientDTO.activeStatus;
        client.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

        return client;
    }

    async updateUserConstructor(user: User, clientDTO: ClientDTO): Promise<User>{
        user.userName = clientDTO.firstName + ' ' + clientDTO.lastName;
        user.email = clientDTO.email;
        user.password = await this.authHelper.hashPassword(clientDTO.password);
        user.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

        return user;
    }

    updateSupplierConstructor(updateSupplier: Supplier, supplier: Supplier): Supplier{
        supplier.name = updateSupplier.name;
        supplier.email = updateSupplier.email;
        supplier.phone = updateSupplier.phone;
        supplier.cnpj = updateSupplier.cnpj;
        supplier.adressId = updateSupplier.adressId
        supplier.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

        return supplier;
    }

    async updateClientAdressConstructor(adress: ClientAdress, adressDTO: ClientAdress): Promise<ClientAdress>{
        adress.street = adressDTO.street;
        adress.number = adressDTO.number;
        adress.block = adressDTO.block;
        adress.city = adressDTO.city;
        adress.state = adressDTO.state;
        adress.updatedAt = new Date().toISOString().replace('T', ' ').substring(0, 19);

        return adress;
    }
}

export default ClassConstructorServiceHelper;