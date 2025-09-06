import { Request, Response } from "express";
import ProductService from "../Service/ProductService";
import { Product } from "../Model/Product";

const productService = new ProductService;

class ProductController{

    getProducts(req: Request, res: Response){
        try{
            res.json(productService.getProducts()).status(200);
        } catch (err: any){
            res.json(err.message).status(204);
        }
    }

    getProductById(req: Request, res: Response){
        try{
            res.json(productService.getProductById(req.params.id));
        } catch(err: any){
            res.json(err.message).status(404);
        }
    }

    addProduct(req: Request, res: Response){
        try{
            res.json(productService.addProduct(req.body as Product)).status(201);
        } catch (err: any){
            res.json(err.message).status(400);
        }
    }

    updateProduct(req: Request, res: Response){
        try{
            res.json(productService.updateProduct(req.params.id as string, req.body as Product)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    patchProductStatus(req: Request, res: Response){
        try{
            res.json(productService.patchProductStatus(req.params.id as string)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    deleteProduct(req: Request, res: Response){
        try{
            res.json(productService.deleteProduct(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(404);
        }
    }
}

export default ProductController;