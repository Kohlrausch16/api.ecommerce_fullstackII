import { Product } from "../Model/Product";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryURLBuilderHelper";

class ProductRepository{

    private db = require('../Database/dbConfig');

    async getProducts(): Promise<Product[]> {
        return await this.db.exec('SELECT * FROM product');
    }  

    async getProductById(id: string): Promise<Product>{
        const foundProduct = await this.db.exec('SELECT * FROM product WHERE id = ?', [id]);

        if(foundProduct.length < 1) throw new Error(`Produto ${id} não encontrado!`);

        return foundProduct;
    }

    async addProduct(product: Product): Promise<string>{
        await this.db.exec('INSERT INTO product (id, name, price, height, width, length, color, description, status, createdAt, updatedAt, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)', [product.id, product.name, product.price, product.height, product.length, product.color, product.description, product.status, product.createdAt, product.updatedAt, product.userId]);

        return repositoryURLBuilderHelper(product.id);
    }

    async updateProduct(id: string, product: Product): Promise<string>{
        this.deleteProduct(id);
        this.db.push(product);
        const url = require("url");
        return url.parse(`http://localhost:3000/produto/${product.id}`);
    }

    async patchProduct(id: string): Promise<string>{
        const foundProduct = await this.getProductById(id);
        foundProduct.status === 1 ? foundProduct.status = 0 : foundProduct.status = 1;

        await this.db.exec('UPDATE product SET status = ? WHERE id = ?', [foundProduct.status, foundProduct.id]);

        return repositoryURLBuilderHelper(foundProduct.id);
    }

    async deleteProduct(id: string): Promise<string>{
        const foundProduct = this.getProductById(id);
        this.db.splice(this.db.indexOf(foundProduct));
        return `Producto ${id} deletado com sucesso`;
    }
}

export default ProductRepository;