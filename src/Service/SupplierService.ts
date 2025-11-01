import { Supplier } from "../Entities/Supplier";
import ClientAdressRepository from "../Repository/ClientAdressRepository";
import SupplierRepository from "../Repository/SupplierRepository";

import { v4 as uuidv4 } from 'uuid'; 


class SupplierService{

    private supplierRepository = new SupplierRepository;
    private clientAdressRepository = new ClientAdressRepository;

    async getSuppliers(): Promise<Supplier[]>{
       return await this.supplierRepository.getSuppliers();
    }

    async getSupplierById(id: string): Promise<Supplier>{
       return await this.supplierRepository.getSupplierById(id);
    }

    async addSupplier(supplier: Supplier): Promise<Supplier>{
        await this.supplierRepository.getSupplierByCNPJ(supplier.cnpj);
        await this.clientAdressRepository.getAdressById(supplier.adressId);

        supplier.id = uuidv4();
        supplier.createdAt = new Date;
        supplier.updatedAt = new Date;

        return await this.supplierRepository.addSupplier(supplier);
    }
}

export default SupplierService;