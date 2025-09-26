import { Request, Response, Router } from "express";
import ClientAdressRepository from "../Repository/ClientAdressRepository";

const cartItemRouter = Router();
const clientAdressRepository = new ClientAdressRepository;

cartItemRouter.get('/item-carrinho', (req: Request, res: Response) => {
    res.json(clientAdressRepository.getAdressById(req.params.id));
});

export default cartItemRouter;