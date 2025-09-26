import { Router } from "express";
import ClientController from "../Controller/ClientController";

const clientRouter = Router();
const clientController = new ClientController

clientRouter.get('/cliente', clientController.getClients);
clientRouter.get('/cliente/:id');
clientRouter.post('/cliente', clientController.addClients);
clientRouter.put('/cliente/:id')
clientRouter.delete('/cliente/:id');

export default clientRouter;