import { Router } from "express";
import ProductController from "../Controller/ProductController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/produto', /*authenticationMiddleware, authorizationMiddleware("get-produto"),*/ productController.getProducts);
productRouter.get('/produto/:id', productController.getProductById);
productRouter.post('/produto', productController.addProduct);
productRouter.put('/produto/:id', productController.updateProduct);
productRouter.patch('/produto/:id', productController.patchProductStatus)
productRouter.delete('/produto/:id', productController.deleteProduct);

export default productRouter;