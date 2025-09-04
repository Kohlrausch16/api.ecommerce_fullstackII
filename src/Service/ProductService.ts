import { Product } from "../Model/Product";
import { v4 as uuidv4 } from 'uuid';
import ProductRepository from "../Repository/ProductRepository";
import ServiceUpdateHelper from "./ServiceHelper/ServiceUpdateRecordHelper";

class ProductService{

    private productRepository = new ProductRepository;
    private serviceUpdateRecordHelper = new ServiceUpdateHelper;

    getProducts(): Product[]{
        return this.productRepository.getProducts();
    }

    getProductById(id: string): Product{
        return this.productRepository.getProductById(id);
    }

    addProduct(product: Product): string{
        product.id = uuidv4();
        product.createdAt = new Date();
        product.updatedAt = new Date();
        return this.productRepository.addProduct(product);
    }

    updateProduct(id: string, product: Product): string{
        product.updatedAt = new Date;
        const foundProduct = this.productRepository.getProductById(id);
        product = this.serviceUpdateRecordHelper.updateProduct(product, foundProduct);      
        return this.productRepository.updateProduct(id, product);
    }

    patchProduct(id: string): string{
        const product = this.productRepository.getProductById(id);
        (product.status) ? product.status = false : product.status = true;
    }

    deleteProduct(id: string){
        return this.productRepository.deleteProduct(id);
    }
}

export default ProductService;