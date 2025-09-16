import { Client } from "../Entities/Client";
import { User } from "../Entities/User";

class AuthenticationRepository{

    private db = require('../Database/dbConfig');

    async getByEmail(table: string, email: string): Promise<Client | User | undefined>{
        const foundRecord: Client[] | User[] = await this.db.exec(`SELECT * FROM user WHERE email = ?`, [email]);
        return foundRecord[0];
    }

}

export default AuthenticationRepository;