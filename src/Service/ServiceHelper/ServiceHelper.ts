import { Product } from "../../Model/Product";


class ServiceUpdateHelper{

    toString(colors: string[]): string{
        return colors.toString();
    }

    toArray(colors: string): string[]{
        return colors.split(',')
    }
}

export default ServiceUpdateHelper;