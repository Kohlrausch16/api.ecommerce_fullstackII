import { Request, Response } from "express";
import SupplierService from "../Service/SupplierService";

const supplierService = new SupplierService;

class SupplierController{

    async getSuppliers(req: Request, res: Response){
        try{
            res.json(await supplierService.getSuppliers()).status(200);
        } catch(err: any){
            res.status(204).json(err.message);
        }
    }

    async getSupplierById(req: Request, res: Response){
        try{
            res.json(await supplierService.getSupplierById(req.params.id as string)).status(200);
        } catch(err: any){
            res.status(404).json(err.message);
        }
    }

    async addSupplier(req: Request, res: Response){
        try{
            res.json(await supplierService.addSupplier(req.body)).status(201);
        } catch(err: any){
            res.status(404).json(err.message);
        }
    }

}

export default SupplierController;