import { Router } from "express";
import ProductController from "../Controller/ProductController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";
                    
const productRouter = Router();
const productController = new ProductController();

productRouter.get('/produto', /*authenticationMiddleware, authorizationMiddleware('get-products'),*/ productController.getProducts);
productRouter.get('/produto/:id', /*authenticationMiddleware, authorizationMiddleware('get-product-by-id'),*/ productController.getProductById);
productRouter.get('/produto/estoque', productController.getProductStock);
productRouter.post('/produto', /*authenticationMiddleware, authorizationMiddleware('add-product'),*/ productController.addProduct);
productRouter.put('/produto/:id',/*authenticationMiddleware, authorizationMiddleware('put-product'), */ productController.updateProduct);
productRouter.patch('/produto/:id', /*authenticationMiddleware, authorizationMiddleware('patch-product'),*/ productController.patchProductStatus)
productRouter.delete('/produto/:id', /*authenticationMiddleware, authorizationMiddleware('delete-product'),*/ productController.deleteProduct);

export default productRouter;