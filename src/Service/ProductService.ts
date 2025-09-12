import { Product } from "../Model/Product";
import { v4 as uuidv4 } from 'uuid';
import ProductRepository from "../Repository/ProductRepository";
import ServiceUpdateHelper from "./ServiceHelper/ServiceHelper";

class ProductService{

    private productRepository = new ProductRepository;
    private serviceHelper = new ServiceUpdateHelper;

    async getProducts(): Promise<Product[]>{
        const products: Product[] = await this.productRepository.getProducts();
        products.map((item: Product) => {
            if(item.color) item.color = this.serviceHelper.toArray(item.color as string);
        })
        return products;
    }

    async getProductById(id: string): Promise<Product>{
        return await this.productRepository.getProductById(id);
    }

    async addProduct(product: Product): Promise<string>{
        product.id = uuidv4();
        product.createdAt = new Date;
        product.updatedAt = new Date;
        product.color = this.serviceHelper.toString(product.color as string[]);
        return await this.productRepository.addProduct(product);
    }

    async updateProduct(id: string, product: Product): Promise<string>{
        product.updatedAt = new Date;
        product.color = this.serviceHelper.toString(product.color as string[]);
        return await this.productRepository.updateProduct(id, product);
    }

    async patchProductStatus(id: string): Promise<string>{
        return await this.productRepository.patchProduct(id);
    }

    async deleteProduct(id: string){
        return await this.productRepository.deleteProduct(id);
    }
}

export default ProductService;