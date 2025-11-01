import { Request, Response } from "express";
import SupplierService from "../Service/SupplierService";
import { validateSupplier } from "./Schema/SupplierSchema";
import { Supplier } from "../Entities/Supplier";

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
            await validateSupplier.validate(req.body, {stripUnknown: true});
            res.json(await supplierService.addSupplier(req.body as Supplier)).status(201);
        } catch(err: any){
            res.status(400).json(err.message);
        }
    }

    async updateSupplier(req: Request, res: Response){
        try{
            await validateSupplier.validate(req.body, {stripUnknown: true});
            res.json(await supplierService.updateSupplier(req.params.id, req.body as Supplier));
        } catch(err: any){
            res.status(400).json(err.message);
        }
    }

    async deleteSupplier(req: Request, res: Response){
        try{
            res.json(await supplierService.deleteSupplier(req.params.id)).status(200);
        } catch(err: any){
            res.status(404).json(err.message);
        }
    }
}

export default SupplierController;