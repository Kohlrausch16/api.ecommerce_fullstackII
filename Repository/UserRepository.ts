import { User } from "../Entities/User";

class UserRepository {
    private db = require('../Database/dbConfig');

    async getUsers(): Promise<User[]> {
        return await this.db.exec('SELECT * FROM user');
    }

    async getUserById(id: string): Promise<User> {
        const foundUser = await this.db.exec('SELECT * FROM user WHERE id = ?', [id]);
        if (foundUser.length < 1) throw new Error(`Usuário ${id} não encontrado!`);
        return foundUser[0];
    }

    async addUser(user: User): Promise<string> {
        await this.db.exec(
            'INSERT INTO user (id, userName, email, password, permissionList, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [user.id, user.userName, user.email, user.password, JSON.stringify(user.permissionList), user.createdAt, user.updatedAt]
        );
        return `Usuário ${user.userName} criado com sucesso!`;
    }

    async updateUser(id: string, user: User): Promise<string> {
        await this.getUserById(id);
        await this.db.exec(
            'UPDATE user SET userName = ?, email = ?, password = ?, permissionList = ?, updatedAt = ? WHERE id = ?',
            [user.userName, user.email, user.password, JSON.stringify(user.permissionList), user.updatedAt, id]
        );
        return `Usuário ${id} atualizado com sucesso!`;
    }

    async deleteUser(id: string): Promise<string> {
        await this.getUserById(id);
        await this.db.exec('DELETE FROM user WHERE id = ?', [id]);
        return `Usuário ${id} deletado com sucesso!`;
    }

  /*  async patchUserStatus(id: string): Promise<string> {
        const user: User = await this.getUserById(id);
        const newStatus = user.permissionList.includes("INACTIVE") ? "ACTIVE" : "INACTIVE";
        user.permissionList = [newStatus];
        await this.db.exec('UPDATE user SET permissionList = ?, updatedAt = ? WHERE id = ?', [JSON.stringify(user.permissionList), new Date(), id]);
        return repositoryURLBuilderHelper(user.id);
    }*/
}

export default UserRepository;