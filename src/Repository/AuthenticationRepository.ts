import { Client } from "../Model/Client";
import { User } from "../Model/User";

class AuthenticationRepository{

    private db = require('../Database/dbConfig');

    async getUserById(id: string): Promise<User>{
        const foundUser: User[] = await this.db.exec('SELECT * FROM user WHERE id = ?', [id]);
        return foundUser[0];
    }

    async getClientById(id: string): Promise<Client>{
        const foundClient: Client[] = await this.db.exec('SELECT * FROM client WHERE id = ?', [id]);
        return foundClient[0];
    }

}

export default AuthenticationRepository;