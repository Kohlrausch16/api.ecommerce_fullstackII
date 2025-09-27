import { Router } from "express";
import ClientController from "../Controller/ClientController";

const clientRouter = Router();
const clientController = new ClientController

clientRouter.get('/cliente', clientController.getClients);
clientRouter.get('/cliente/:id', clientController.getClientById);
clientRouter.post('/cliente', clientController.addClients);
clientRouter.delete('/cliente/:id', clientController.deleteClient);

export default clientRouter;