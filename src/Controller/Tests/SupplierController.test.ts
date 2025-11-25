import SupplierController from "../SupplierController";

const supplierController = new SupplierController();

describe("Supplier controller test", () => {
    it("should have getSuppliers method", () => {
        expect(supplierController.getSuppliers).toBe([]);
    });
});