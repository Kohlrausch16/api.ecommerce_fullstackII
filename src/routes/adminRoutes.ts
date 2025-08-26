import { Router } from "express";
import ProductController from "../Controller/ProductController";

const adminRouter = Router();
const productController = new ProductController();

//busca todos os produtos
adminRouter.get('/produto', productController.getProducts);

export default adminRouter;