import { Router } from "express";
import ClientController from "../Controller/ClientController";
import { authenticationMiddleware } from "../Middleware/AuthenticationMiddleware";
import { authorizationMiddleware } from "../Middleware/AuthorizationMIddleware";

const clientRouter = Router();
const clientController = new ClientController

clientRouter.get('/cliente', authenticationMiddleware, authorizationMiddleware('get-clients'), clientController.getClients);
clientRouter.get('/cliente/:id', authenticationMiddleware, authorizationMiddleware('get-client-by-id'), clientController.getClientById);
clientRouter.post('/cliente', clientController.addClients);
clientRouter.put('/cliente/:id', authenticationMiddleware, authorizationMiddleware('put-client'), clientController.updateClient);
clientRouter.delete('/cliente/:id', authenticationMiddleware, authorizationMiddleware('delete-client'), clientController.deleteClient);

export default clientRouter;