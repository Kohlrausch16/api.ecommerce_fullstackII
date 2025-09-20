import { User } from "../Entities/User";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryHelper";

class UserRepository{

    private db = require('../Database/dbConfig');

    async getUsers(): Promise<User[]>{
        return await this.db.exec('SELECT * FROM user')
    }

    async getUserById(id: string): Promise<User>{
        const foundUser = await this.db.exec('SELECT * FROM user WHERE id = ?', [id]);        
        return foundUser[0];
    }

    async addUser(user: User): Promise<string>{
        await this.db.exec('INSERT INTO user (id, userName, email, password, permissionList, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)', [user.id, user.userName, user.email, user.password, user.permissionList as string, user.createdAt, user.updatedAt]);
        return repositoryURLBuilderHelper(user.id);       
    }

}

export default UserRepository;