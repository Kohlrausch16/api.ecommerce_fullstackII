import { Supplier } from "../Entities/Supplier";


class SupplierRepository{

    private db = require('../Database/dbConfig');

    async getSuppliers(): Promise<Supplier[]>{
        return await this.db.exec('SELECT * FROM supplier');
    }

    async getSupplierById(id: string): Promise<Supplier>{
        const foundSupplier: Supplier[] = await this.db.exec('SELECT * FROM supplier WHERE id = ?', [id]);

        if(foundSupplier.length < 1)
            throw new Error (`Supplier ${id} not found`);

        return foundSupplier[0];
    }

     async getSupplierByCNPJ(cnpj: string): Promise<void>{
        const foundData: Supplier[] = await this.db.exec('SELECT * FROM supplier WHERE cnpj = ?', [cnpj]);

        if(foundData.length >= 1)
            throw new Error(`CNPJ ${cnpj} already registred`);
    }

    async addSupplier(supplier: Supplier): Promise<Supplier>{

        await this.db.exec('INSERT INTO supplier (id, name, email, phone, cnpj, adressId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [supplier.id, supplier.name, supplier.email, supplier.phone, supplier.cnpj, supplier.adressId, supplier.createdAt, supplier.updatedAt]);

        return this.getSupplierById(supplier.id);
    }


}

export default SupplierRepository;