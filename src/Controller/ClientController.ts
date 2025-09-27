import { Request, Response } from "express";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import ClientService from "../Service/ClientService";

const clientService = new ClientService;

class ClientController{

    async getClients(req: Request, res: Response){
        try{
          res.json(await clientService.getClients()).status(200);
        } catch (err: any){
            res.json(err.message).status(404);
        }
    }

    async getClientById(req: Request, res: Response){
        try{
          res.json(await clientService.getClientById(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(404);
        }
    }

    async addClients(req: Request, res: Response){
        try{
            // validar estrutura do DTO!!;
            res.json(await clientService.addClient(req.body as ClientDTO)).status(201);    
        } catch (err: any){
            res.json(err.message).status(400);
        }
    }

    async updateClient(req: Request, res: Response){
        try{
            // validar estrutura do DTO!!;
            res.json(await clientService.updateClient(req.params.id as string, req.body as ClientDTO)).status(201);    
        } catch (err: any){
            res.json(err.message).status(400);
        }
    }

    async deleteClient(req: Request, res: Response){
        try{
          res.json(await clientService.deleteClient(req.params.id)).status(200);
        } catch (err: any){
            res.json(err.message).status(404);
        }
    }

}

export default ClientController;