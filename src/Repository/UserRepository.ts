import { User } from "../Entities/User";

class UserRepository{

    private db = require('../Database/dbConfig');

    async getUsers(): Promise<User[]>{
        return await this.db.exec('SELECT * FROM user')
    }

    async getUserById(id: string): Promise<User>{
        const foundUser = await this.db.exec('SELECT * FROM user WHERE id = ?', [id]);        
        return foundUser[0];
    }

}

export default UserRepository;