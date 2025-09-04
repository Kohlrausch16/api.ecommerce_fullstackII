import { Product } from "../../Model/Product";


class ServiceUpdateHelper{

    updateProduct(product: Product, foundProduct: Product){
        product.id = foundProduct.id;
        return product;
    }

}

export default ServiceUpdateHelper;