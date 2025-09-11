import { Product } from "../../Model/Product";


class ServiceUpdateHelper{

    toString(colors: string[]): string{
        return colors.toString();
    }

    toArray(colors: string): string[]{
        return colors.split(',')
    }

    updateProduct(product: Product, foundProduct: Product){
        product.id = foundProduct.id;
        return product;
    }

}

export default ServiceUpdateHelper;