import { Router, Request, Response } from "express";
import SupplierController from "../Controller/SupplierController";


const supplierRouter = Router();
const supplierController = new SupplierController;

supplierRouter.get('/fornecedor', supplierController.getSuppliers);
supplierRouter.get('/fornecedor/:id', supplierController.getSupplierById);
supplierRouter.post('/fornecedor', supplierController.addSupplier);
supplierRouter.put('/fornecedor/:id', supplierController.updateSupplier);
supplierRouter.delete('/fornecedor/:id', supplierController.deleteSupplier);

export default supplierRouter;