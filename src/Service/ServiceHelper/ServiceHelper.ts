import bcrypt from 'bcrypt';
import { Client } from "../../Entities/Client";
import { User } from "../../Entities/User";
class ServiceHelper{

    toString(colors: string[]): string{
        return colors.toString();
    }

    toArray(value: string): string[]{
        return value.split(',');
    }

    hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, 10);
    }
    
    async parseClientIntoUser(client: Client, password: string): Promise<User>{
        const clientPermisisons = 'get-product, get-product-by-id';
        var user: User = {id: '', userName: '', email: '', password: '', permissionList: '', createdAt: new Date, updatedAt: new Date};

        user.id = client.id;
        user.userName = client.firstName + ' ' + client.lastName;
        user.email = client.email;
        user.password = await this.hashPassword(password);
        user.permissionList = clientPermisisons;
        
        return user;
    }   
}

export default ServiceHelper;