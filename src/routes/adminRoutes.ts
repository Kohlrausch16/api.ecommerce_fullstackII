import { Router } from "express";
import ProductController from "../Controller/ProductController";

const adminRouter = Router();
const productController = new ProductController();

adminRouter.get('/produto', productController.getProducts);
adminRouter.get('/produto/:id', productController.getProductById);
adminRouter.post('produto', productController.addProduct)
adminRouter.delete('product/:id', productController.deleteProduct);

export default adminRouter;