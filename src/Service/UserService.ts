import { ClientDTO } from "../Entities/DTO/ClientDTO";
import { User } from "../Entities/User";
import UserRepository from "../Repository/UserRepository";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";


class UserService{

    private userRepository = new UserRepository;
    private classConstructor = new ClassConstructorServiceHelper;

    async getUsers(): Promise<User[]>{
        return await this.userRepository.getUsers();
    }

    async getUserById(id: string): Promise<User>{
        return await this.userRepository.getUserById(id);
    }

    async addUser(clientDTO: ClientDTO): Promise<User>{
        const createdUser: User = await this.classConstructor.userConstructor({id: '', userName: clientDTO.firstName + ' ' + clientDTO.lastName, email: clientDTO.email, password: clientDTO.password, permissionList: '' as string, createdAt: null, updatedAt: null});

        console.log(createdUser);
        return createdUser;
    }

}

export default UserService;