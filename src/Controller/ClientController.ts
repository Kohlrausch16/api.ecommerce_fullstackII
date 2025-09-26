import { Request, Response } from "express";
import { ClientDTO } from "../Entities/DTO/ClientDTO";
import ClientService from "../Service/ClientService";

const clientService = new ClientService;

class ClientController{

    async getClients(req: Request, res: Response){
        try{
            
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

}

export default ClientController;