import { Router, Request, Response } from "express";
import SupplierController from "../Controller/SupplierController";


const supplierRouter = Router();
const supplierController = new SupplierController;

supplierRouter.get('/fornecedor', supplierController.getSuppliers);
supplierRouter.get('/fornecedor/:id', supplierController.getSupplierById);

export default supplierRouter;

