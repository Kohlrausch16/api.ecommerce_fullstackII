import { Product } from "../../Entities/Product";


class ServiceUpdateHelper{

    toString(colors: string[]): string{
        return colors.toString();
    }

    toArray(colors: string): string[]{
        return colors.split(',')
    }
}

export default ServiceUpdateHelper;