import { Product } from "../../Entities/Product";
import bcrypt from 'bcrypt';

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
}

export default ServiceHelper;