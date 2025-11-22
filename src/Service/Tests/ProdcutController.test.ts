import ProductService from "../ProductService";

const productService = new ProductService;

describe("Testing ProductService methods", () =>{
    it("Test - Get Products", () => {
        const foundProducts = productService.getProducts();
        expect(foundProducts).toBe([]);
    });
});