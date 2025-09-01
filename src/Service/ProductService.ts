import { Product } from "../Model/Product";
import { v4 as uuidv4 } from 'uuid';
import ProductRepository from "../Repository/ProductRepository";

const productRepository = new ProductRepository;

class ProductService{

    getProducts(): Product[]{
        return productRepository.getProducts();
    }

    getProductById(id: string): Product{
        return productRepository.getProductById(id);
    }

    addProduct(product: Product): string{
        product.id = uuidv4();
        return productRepository.addProduct(product);
    }

    deleteProduct(id: string){
        return productRepository.deleteProduct(id);
    }
}

export default ProductService;