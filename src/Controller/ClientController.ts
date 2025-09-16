import { Client } from "../Entities/Client";
import ClientService from "../Service/ClientService";

import { Request, Response } from "express";

const clientService = new ClientService;

class ClientController{

    async getClients(req: Request, res: Response){
        try{
            res.json(await clientService.getClients()).status(200);
        } catch(err: any){
            res.json(err.message).status(204);
        }
    }

    async getClientById(req: Request, res: Response){
        try{
            res.json(await clientService.getClientById(req.params.id)).status(200);
        } catch(err: any){
            res.json(err.message).status(404);
        }
    }

    async addClient(req: Request, res: Response){
        try{
            res.json(await clientService.addClient(req.body)).status(201);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    async updateClient(req: Request, res: Response){
        try{
            res.json(await clientService.updateClient(req.params.id, req.body)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    async deleteClient(req: Request, res: Response){
        try{
            res.json(await clientService.deleteClient(req.params.id)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }

    async patchClientStatus(req: Request, res: Response){
        try{
            res.json(await clientService.patchClientStatus(req.params.id)).status(200);
        } catch(err: any){
            res.json(err.message).status(400);
        }
    }
}

export default ClientController;