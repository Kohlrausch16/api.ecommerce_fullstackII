import { Request, Response } from "express";
import SupplierService from "../Service/SupplierService";

const supplierService = new SupplierService;

class SupplierController{

    async getSupplierById(req: Request, res: Response){
        try{
            await supplierService.getSupplierById(req.params.id);
        } catch(err: any){
            res.status(404).json(err.message);
        }
    }

}

export default SupplierController;