import { Router } from "express";
import ProductController from "../Controller/ProductController";

const adminRouter = Router();
const productController = new ProductController();

adminRouter.get('/produto', productController.getProducts);

export default adminRouter;