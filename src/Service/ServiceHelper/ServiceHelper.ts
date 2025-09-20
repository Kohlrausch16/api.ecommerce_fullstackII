import { Product } from "../../Entities/Product";
import bcrypt from 'bcrypt';
import { Request } from "express";
import { Client } from "../../Entities/Client";
import { User } from "../../Entities/User";
class ServiceHelper{

    toString(colors: string[]): string{
        return colors.toString();
    }

    toArray(colors: string): string[]{
        return colors.split(',')
    }

    hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, 10);
    }

    getUserId(){
    }

    
    parseClientIntoUser(client: Client, password: string): User{
        const clientPermisisons = ['get-product'];
        var user: User = {id: '', userName: '', email: '', password: '', permissionList: '', createdAt: new Date, updatedAt: new Date};

        user.id = client.id;
        user.userName = client.firstName + client.lastName;
        user.email = user.email;
        user.password = password;
        user.permissionList = clientPermisisons;
        

        return user;
    }
}

export default ServiceHelper;