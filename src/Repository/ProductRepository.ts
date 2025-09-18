import { Product } from "../Entities/Product";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryURLBuilderHelper";

class ProductRepository{

    private db = require('../Database/dbConfig');

    async getProducts(): Promise<Product[]> {
        return await this.db.exec('SELECT * FROM product');
    }  

    async getProductById(id: string): Promise<Product>{
        const foundProduct = await this.db.exec('SELECT * FROM product WHERE id = ?', [id]);

        if(foundProduct.length < 1) throw new Error(`Produto ${id} não encontrado!`);

        return foundProduct[0];
    }

    async addProduct(product: Product): Promise<string>{
        await this.db.exec('INSERT INTO product (id, name, price, height, width, length, color, description, year, status, createdAt, updatedAt, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [product.id, product.name, product.price, product.height, product.width, product.length, product.color, product.description, product.year, product.status, product.createdAt, product.updatedAt, product.userId]);

        return repositoryURLBuilderHelper(product.id);
    }

    async updateProduct(id: string, product: Product): Promise<string>{
        await this.getProductById(id);

        await this.db.exec('UPDATE product SET name = ?, price = ?, height = ?, width =?, length = ?, color = ?, description = ?, year = ?, status = ?, updatedAt = ?, userId = ? WHERE id = ?', [product.name, product.price, product.height, product.width, product.length, product.color, product.description, product.year, product.status, product.updatedAt, product.userId, id]); 

        return repositoryURLBuilderHelper(id);
    }

    async patchProduct(id: string): Promise<string>{
        const product: Product = await this.getProductById(id);
        (product.status == 1) ? product.status = false : product.status = true;
        product.updatedAt = new Date;

        await this.db.exec('UPDATE product SET status = ?, updatedAt = ? WHERE id = ?', [product.status, product.updatedAt, product.id]);

        return repositoryURLBuilderHelper(product.id);
    }

    async deleteProduct(id: string): Promise<string>{
        await this.getProductById(id);
        await this.db.exec('DELETE FROM product WHERE id = ?', [id]);
        return `Produto ${id} deletado com sucesso!`; 
    }
}

export default ProductRepository;