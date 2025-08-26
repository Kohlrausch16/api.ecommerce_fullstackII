import { Request, Response } from "express";
import ProductService from "../Service/ProductService";

const productService = new ProductService;

class ProductController{

    getProducts(req: Request, res: Response){
        try{
            res.json(productService.getProducts()).status(200);
        } catch (err: any){
            res.json(err.message).status(204);
        }
    }


}

export default ProductController;