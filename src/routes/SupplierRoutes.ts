import { Router } from "express";
import SupplierController from "../Controller/SupplierController";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";


const supplierRouter = Router();
const supplierController = new SupplierController;

supplierRouter.get('/fornecedor', authenticationMiddleware, authorizationMiddleware('get-supplier'), supplierController.getSuppliers);
supplierRouter.get('/fornecedor/:id', authenticationMiddleware, authorizationMiddleware('get-by-id-supplier'), supplierController.getSupplierById);
supplierRouter.post('/fornecedor', authenticationMiddleware, authorizationMiddleware('add-supplier'), supplierController.addSupplier);
supplierRouter.put('/fornecedor/:id', authenticationMiddleware, authorizationMiddleware('update-supplier'), supplierController.updateSupplier);
supplierRouter.delete('/fornecedor/:id', authenticationMiddleware, authorizationMiddleware('delete-supplier'), supplierController.deleteSupplier);

export default supplierRouter;