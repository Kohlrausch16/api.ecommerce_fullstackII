import { User } from "../Entities/User";
import { repositoryURLBuilderHelper } from "./RepositoryHelper/RepositoryHelper";

class UserRepository{

    private db = require('../Database/dbConfig');

    async getUsers(): Promise<User[]>{
        console.log('Repository');
        return await this.db.exec('SELECT * FROM user');
    }

    async getUserById(id: string): Promise<User>{

        const foundUser = await this.db.exec('SELECT * FROM user WHERE id = ?', [id]);        
        
        console.log(foundUser);

        if(foundUser.length < 1)
            throw new Error(`User ${id} not found!`);

        return foundUser[0];
    }

    async addUser(user: User): Promise<User>{
        await this.db.exec('INSERT INTO user (id, userName, email, password, permissionList, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)', [user.id, user.userName, user.email, user.password, user.permissionList as string, user.createdAt, user.updatedAt]);  
        
        return await this.getUserById(user.id);
    }

    async updateUser(id: string, user: User): Promise<void>{
        await this.db.exec('UPDATE user SET userName = ?, email = ?, password = ?, permissionList = ?, updatedAt = ?', [user.userName, user.email, user.password, user.permissionList as string, user.updatedAt]);
    }

    async deleteuser(id: string): Promise<string>{
        await this.getUserById(id);
        await this.db.exec('DELETE FROM user WHERE id = ?', [id]);
        return `Usuário ${id} deletado com sucesso!`;
    }

}

export default UserRepository;