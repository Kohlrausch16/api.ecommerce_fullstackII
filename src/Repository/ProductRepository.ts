import { Product } from "../Model/Product";

class ProductRepository{

    private db = require('../Database/dbConfig');

    async getProducts(): Promise<Product[]> {
        const result = await this.db.exec('SELECT * FROM product');
        console.log('Resultado da query:', result); 
        return result;
    }  

    async getProductById(id: string): Promise<Product>{
        /*

        if(!foundProduct){;
            throw new Error(`Produto ${id} não encontrado!`);
        }

        return foundProduct;*/

        return await this.db[0];
    }

    async addProduct(product: Product): Promise<string>{
        this.db.push(product);
        const url = require("url");
        return url.parse(`http://localhost:3000/produto/${product.id}`);
    }

    async updateProduct(id: string, product: Product): Promise<string>{
        this.deleteProduct(id);
        this.db.push(product);
        const url = require("url");
        return url.parse(`http://localhost:3000/produto/${product.id}`);
    }

    async patchProduct(id: string): Promise<string>{
        return `Integração para rota PATCH ainda não realizada com o banco de dados!`;
    }

    async deleteProduct(id: string): Promise<string>{
        const foundProduct = this.getProductById(id);
        this.db.splice(this.db.indexOf(foundProduct));
        return `Producto ${id} deletado com sucesso`;
    }
}

export default ProductRepository;