import { Request, Response } from "express";
import ProductService from "../Service/ProductService";
import { Product } from "../Entities/Product";
import { validateProduct } from "./Schema/ProductSchema";

const productService = new ProductService;

class ProductController{

    async getProducts(req: Request, res: Response){
        try{

            const {name, minPrice, maxPrice} = req.query;

            if(name){
                res.json(await productService.getProductByName(name as string)).status(200);
            } else if(minPrice && maxPrice){
                res.json(await productService.getProductByPrice(minPrice as string, maxPrice as string)).status(200)
            } else {
                res.json(await productService.getProducts()).status(200);
            }
        
        } catch (err: any){
            res.json(err.message).status(204);
        }
    }

    async getProductById(req: Request, res: Response){
        try{
            res.json(await productService.getProductById(req.params.id));
        } catch(err: any){
            res.json(err.message).status(404);
        }
    }
    
    async addProduct(req: Request, res: Response){
        try{
            await validateProduct.validate(req.body, {stripUnknown : true});
            res.json(await productService.addProduct(req.body as Product)).status(201);
        } catch (err: any){
            res.json(err.message).status(400);
        }
    }

    async updateProduct(req: Request, res: Response){
        try{
            await validateProduct.validate(req.body, {stripUnknown : true});
            res.json(await productService.updateProduct(req.params.id as string, req.body as Product)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    async patchProductStatus(req: Request, res: Response){
        try{
            res.json(await productService.patchProductStatus(req.params.id as string)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
        
    }
    
    async deleteProduct(req: Request, res: Response){
        try{
            res.json(await productService.deleteProduct(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(404);
        }
    }
}

export default ProductController;