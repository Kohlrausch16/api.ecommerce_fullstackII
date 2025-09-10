import { User } from "../Model/User";

class UserRepository {
    private db = require('../Database/ecommerceDB.db');

    async getUsers(): Promise<User[]> {
        const result = await this.db.all("SELECT * FROM user");
        return result;
    }

    async getUserById(id: string): Promise<User> {
        const foundUser: User | undefined = await this.db.get(
            `SELECT * FROM user WHERE id=?`,
            [id]
        );

        if (!foundUser) {
            throw new Error(`Usuário ${id} não encontrado!`);
        }

        return foundUser;
    }

    /*
    async addUser(user: User): Promise<string> {
        await this.db.run(
            `INSERT INTO user (id, userName, password, permissionList, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)`,
            [user.id, user.userName, user.password, JSON.stringify(user.permissionList), user.createdAt, user.updatedAt]
        );
        return `http://localhost:3000/user/${user.id}`;
    }

    async deleteUser(id: string): Promise<string> {
        await this.db.run(`DELETE FROM user WHERE id=?`, [id]);
        return `Usuário ${id} deletado com sucesso`;
    }
    */
}

export default UserRepository;
