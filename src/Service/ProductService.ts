import { Product } from "../Entities/Product";
import { v4 as uuidv4 } from 'uuid';
import ProductRepository from "../Repository/ProductRepository";
import ServiceUpdateHelper from "./ServiceHelper/ServiceHelper";
import SupplierService from "../Service/SupplierService";

class ProductService{

    private productRepository = new ProductRepository;
    private serviceHelper = new ServiceUpdateHelper;
    private supplierService = new SupplierService;

    async getProducts(): Promise<Product[]>{
        const products: Product[] = await this.productRepository.getProducts()
        
        products.map((item: Product) => {
            return item.color = this.serviceHelper.toArray(item.color as string);
        });

        return products;
    }

    async getProductById(id: string): Promise<Product>{
        const foundProduct = await this.productRepository.getProductById(id);

        foundProduct.color = this.serviceHelper.toArray(foundProduct.color as string);

        return foundProduct;
    }

    async getProductByName(name: string): Promise<Product[]>{
        const products: Product[] = await this.productRepository.getProductByName(name);

         products.map((item: Product) => {
            return item.color = this.serviceHelper.toArray(item.color as string);
        });

        return products;
    }

    async getProductByPrice(minPrice: string, maxPrice: string): Promise<Product[]>{
       const products: Product[] = await this.productRepository.getProductByPrice(minPrice, maxPrice);

        products.map((item: Product) => {
            return item.color = this.serviceHelper.toArray(item.color as string);
        });
        return products;
    }

    async addProduct(product: Product): Promise<string>{
        await this.supplierService.getSupplierById(product.supplierId);

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

    async patchProductStatus(id: string): Promise<Product>{
        await this.productRepository.patchProduct(id);
        return this.getProductById(id);
    }

    async deleteProduct(id: string){
        return await this.productRepository.deleteProduct(id);
    }
}

export default ProductService;