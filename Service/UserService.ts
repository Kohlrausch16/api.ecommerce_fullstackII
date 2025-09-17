import { User } from "../Entities/User";
import UserRepository from "../Repository/UserRepository";

class UserService {
    private userRepository = new UserRepository;

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers();
    }

    async getUserById(id: string): Promise<User> {
        return await this.userRepository.getUserById(id);
    }

    async addUser(user: User): Promise<string> {
        return await this.userRepository.addUser(user);
    }

    async updateUser(id: string, user: User): Promise<string> {
        return await this.userRepository.updateUser(id, user);
    }

    async deleteUser(id: string): Promise<string> {
        return await this.userRepository.deleteUser(id);
    }

/*    async patchUserStatus(id: string): Promise<string> {
        return await this.userRepository.patchUserStatus(id);
    }*/
}

export default UserService;