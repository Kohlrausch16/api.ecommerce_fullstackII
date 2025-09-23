import { Router } from "express";
import ClientController from "../Controller/ClientController";

const clientRouter = Router();
const clientController = new ClientController;

clientRouter.get('/cliente', clientController.getClients);
clientRouter.get('/cliente/:id', clientController.getClientById);
clientRouter.post('/cliente', clientController.addClient);
clientRouter.put('/cliente/:id', clientController.updateClient)
clientRouter.delete('/cliente/:id', clientController.deleteClient);

export default clientRouter;