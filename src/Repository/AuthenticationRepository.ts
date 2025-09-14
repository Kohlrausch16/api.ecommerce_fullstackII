import { User } from "../Model/User";

class AuthenticationRepository{

    private db = require('../Database/dbConfig');

    async getUserById(id: string): Promise<User>{
        const foundUser: User[] = await this.db.exec('SELECT * FROM user WHERE id = ?', [id]);
        return foundUser[0];
    }

}

export default AuthenticationRepository;