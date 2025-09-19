import { Product } from "../../Entities/Product";
import bcrypt from 'bcrypt';
import { Request } from "express";
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
        return (async (req: Request) => {
            console.log('Bateu no getUserId');
        const token = req.headers;
        console.log(token);
        });
    }
}

export default ServiceHelper;