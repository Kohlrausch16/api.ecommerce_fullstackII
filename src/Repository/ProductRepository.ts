import { Product } from "../Model/Product";

class ProductRepository{

    private db: Product[] = require("../Database/productDB.json");

    getProducts(): Product[]{
        return this.db;
    }   

    getProductById(id: string): Product{
        const foundProduct: Product | undefined = this.db.find((item: Product) => {
            return item.id == id;
        });

        if(!foundProduct){
            throw new Error(`Produto ${id} não encontrado!`);
        }

        return foundProduct;
    }

    addProduct(product: Product): string{
        this.db.push(product);
        const url = require("url");
        return url.parse(`http://localhost:3000/produto/${product.id}`);
    }

    updateProduct(id: string, product: Product): string{
        this.deleteProduct(id);
        this.db.push(product);
        const url = require("url");
        return url.parse(`http://localhost:3000/produto/${product.id}`);
    }

    patchProduct(id: string){
        return `Integração para rota PATCH ainda não realizada com o banco de dados!`;
    }

    deleteProduct(id: string){
        const foundProduct = this.getProductById(id);
        this.db.splice(this.db.indexOf(foundProduct));
        return `Producto ${id} deletado com sucesso`;
    }

}

export default ProductRepository;