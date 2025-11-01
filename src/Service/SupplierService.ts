import { Supplier } from "../Entities/Supplier";
import SupplierRepository from "../Repository/SupplierRepository";


class SupplierService{

    private supplierRepository = new SupplierRepository;

    async getSuppliers(): Promise<Supplier[]>{
       return await this.supplierRepository.getSuppliers();
    }

    async getSupplierById(id: string): Promise<Supplier>{
       return await this.supplierRepository.getSupplierById(id);
    }
}

export default SupplierService;