import ProductRepository from "../Repository/ProductRepository";

const productRepository = new ProductRepository;

class ProductService{

    getProducts(){
        return productRepository.getProducts();
    }

}

export default ProductService;