import { Product } from "../Model/Product";
import { v4 as uuidv4 } from 'uuid';
import ProductRepository from "../Repository/ProductRepository";
import ServiceUpdateHelper from "./ServiceHelper/ServiceUpdateRecordHelper";

class ProductService{

    private productRepository = new ProductRepository;
    private serviceUpdateRecordHelper = new ServiceUpdateHelper;

    async getProducts(): Promise<Product[]>{
        return await this.productRepository.getProducts();
    }

    async getProductById(id: string): Promise<Product>{
        return await this.productRepository.getProductById(id);
    }

    async addProduct(product: Product): Promise<string>{
        product.id = uuidv4();
        product.createdAt = new Date();
        product.updatedAt = new Date();
        return await this.productRepository.addProduct(product);
    }

    async updateProduct(id: string, product: Product): Promise<string>{
        product.updatedAt = new Date;
        const foundProduct = await this.productRepository.getProductById(id);
        product = await this.serviceUpdateRecordHelper.updateProduct(product, foundProduct);      
        return await this.productRepository.updateProduct(id, product);
    }

    async patchProductStatus(id: string): Promise<string>{
        const product = await this.productRepository.getProductById(id);
        (product.status) ? product.status = false : product.status = true;
        return await this.productRepository.updateProduct(id, product);
    }

    async deleteProduct(id: string){
        return await this.productRepository.deleteProduct(id);
    }
}

export default ProductService;