
const client = require("sqlite3").verbose();
let sql; 

class ProductRepository{

    getProducts(){
        return {test: "Product"};
    }

}

export default ProductRepository;