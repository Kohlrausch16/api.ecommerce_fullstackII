import ServiceHelper from "./ServiceHelper/ServiceHelper";


class CartService{

    private serviceHelper = new ServiceHelper;

    async getCarts(id: string): Promise<void>{
        await this.serviceHelper.getUserId(id);
    }


}

export default CartService;