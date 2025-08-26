const client = require("sqlite3").verbose();
let sql; 

// Documentação SQLite + NodeJS -> https://nodejs.org/api/sqlite.html

class ProductRepository{


    getProducts(){

        try{
            const test = new client.Database('../Database/ecommerce_db.db', (err: any) => {
                if(err){
                    console.log("Erro ao conectar:", err.message);
                } else {
                    console.log("Conectado");
                }
            });
        } catch(err: any) {
            console.log(err.message);
        }
    }

}

export default ProductRepository;