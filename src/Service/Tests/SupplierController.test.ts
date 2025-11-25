import { SupplierDTO } from "../../Entities/DTO/SupplierDTO";
import SupplierService from "../SupplierService";

const supplierService = new SupplierService;

describe("Supplier controller test", () => {
    it("Get Suppliers", async () => {
        const foundSuppliers: SupplierDTO[] = await supplierService.getSuppliers();
        foundSuppliers.map((item: SupplierDTO) => {
            expect(item).toHaveProperty("id");
            expect(item).toHaveProperty("name");
            expect(item).toHaveProperty("email");
            expect(item).toHaveProperty("phone");
            expect(item).toHaveProperty("cnpj");
            expect(item).toHaveProperty("adress");
            expect(item).toHaveProperty("createdAt");
            expect(item).toHaveProperty("updatedAt");
        });
    });

    it("Get Supplier By Id", async () => {
        const foundSupplier: SupplierDTO = await supplierService.getSupplierById('e0c8b66a-2d48-4d45-aaf1-8de3b03cb002');
        expect(foundSupplier.name).toBe('Vintage Sul');
    });

    it("Add Supplier", async () => {
        const newSupplier = {
            id: "",
            name: "Supplier test",
            email: "supplier@test.com",
            phone: "5199999999",
            cnpj: "12345678000199",
            adressId: "74a97e5d-3aaf-407e-9c48-a15bace12762",
            createdAt: "",
            updatedAt: ""
        };

        const createdSupplier = await supplierService.addSupplier(newSupplier as any);

        expect(createdSupplier).toHaveProperty("id");
        expect(createdSupplier.name).toBe("Supplier test");
        expect(createdSupplier.cnpj).toBe("12345678000199");
        expect(createdSupplier).toHaveProperty("createdAt");
        expect(createdSupplier).toHaveProperty("updatedAt");
    });

    it("Update Supplier", async () => {
        const updateData = {
            name: "Updated Supplier",
            email: "updated@supplier.com",
            phone: "51988888888",
            cnpj: "98765432000199",
            adressId: "e0c8b66a-2d48-4d45-aaf1-8de3b03cb002"
        };

        const updatedSupplier = await supplierService.updateSupplier('e0c8b66a-2d48-4d45-aaf1-8de3b03cb002', updateData as any);

        expect(updatedSupplier.id).toBe("e0c8b66a-2d48-4d45-aaf1-8de3b03cb002");
        expect(updatedSupplier.name).toBe("Updated Supplier");
        expect(updatedSupplier.email).toBe("updated@supplier.com");
        expect(updatedSupplier.phone).toBe("51988888888");
    });


    it("Delete Supplier", async () => {
        const returnMessage: string = await supplierService.deleteSupplier('e0c8b66a-2d48-4d45-aaf1-8de3b03cb002');
        expect(returnMessage).toBe("string");
    });
});