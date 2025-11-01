import { ClientAdress } from "../Entities/ClientAdress";
import { SupplierDTO } from "../Entities/DTO/SupplierDTO";
import { Supplier } from "../Entities/Supplier";
import ClientAdressRepository from "../Repository/ClientAdressRepository";
import SupplierRepository from "../Repository/SupplierRepository";
import { v4 as uuidv4 } from 'uuid'; 
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";

class SupplierService{

    private supplierRepository = new SupplierRepository;
    private clientAdressRepository = new ClientAdressRepository;
    private classConstructor = new ClassConstructorServiceHelper;

    async getSuppliers(): Promise<SupplierDTO[]>{
       const supplierList: Supplier[] = await this.supplierRepository.getSuppliers();
       const supplierDTOList: SupplierDTO[] = [];

        const index =  await supplierList.map(async (item: Supplier) => {
            const suplierAdress: ClientAdress = await this.clientAdressRepository.getAdressById(item.adressId);
            const supplierDTO: SupplierDTO = await this.classConstructor.supplierDTOConstructor(item as Supplier, suplierAdress);

            supplierDTOList.push(supplierDTO);
        });

        return supplierDTOList;
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

    async updateSupplier(id: string, supplier: Supplier): Promise<Supplier>{
        console.log(`Id: ${id}, Supplier: ${supplier}`);

        await this.getSupplierById(id);
        return await this.supplierRepository.updateSupplier(id, supplier);
    }

    async deleteSupplier(id: string): Promise<string>{
        console.log(id);
        await this.getSupplierById(id);
        return await this.supplierRepository.deleteSupplier(id);
    }
}

export default SupplierService;