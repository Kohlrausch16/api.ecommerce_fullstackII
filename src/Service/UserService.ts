import { User } from "../Entities/User";
import UserRepository from "../Repository/UserRepository";


class UserService{

    private userRepository = new UserRepository;

    async getUsers(): Promise<User[]>{
        return await this.userRepository.getUsers();
    }

    async getUserById(id: string): Promise<User>{
        return await this.userRepository.getUserById(id as string);
    }

}

export default UserService;