import { Supplier } from "../Entities/Supplier";


class SupplierRepository{

    private db = require('../Database/dbConfig');

    async getSuppliers(): Promise<void/*Supplier[]*/>{

    }

    async getSupplierById(id: string): Promise<Supplier>{
        const foundSupplier: Supplier[] = await this.db.exec('SELECT * FROM supplier WHERE id = ?', [id]);

        if(foundSupplier.length < 1)
            throw new Error (`Supplier ${id} not found`);

        return foundSupplier[0];
    }

    async addSupplier(supplier: Supplier): Promise<Supplier>{

        
        return this.getSupplierById(supplier.id);
    }


}

export default SupplierRepository;