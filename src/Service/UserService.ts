import { ClientDTO } from "../Entities/DTO/ClientDTO";
import { User } from "../Entities/User";
import UserRepository from "../Repository/UserRepository";
import ClassConstructorServiceHelper from "./ServiceHelper/ClassConstructorServiceHelper";
import ServiceHelper from "./ServiceHelper/ServiceHelper";


class UserService{

    private userRepository = new UserRepository;
    private classConstructor = new ClassConstructorServiceHelper;
    private serviceHelper = new ServiceHelper;
    
    async getUsers(): Promise<User[]>{
        return await this.userRepository.getUsers();
    }

    async getUserById(id: string): Promise<User>{
        const foundUser = await this.userRepository.getUserById(id);
        foundUser.permissionList = await this.serviceHelper.toArray(foundUser.permissionList as string);
        return foundUser;
    }

    async addUser(clientDTO: ClientDTO): Promise<User>{
        const createdUser: User = await this.classConstructor.userConstructor({id: '', userName: clientDTO.firstName + ' ' + clientDTO.lastName, email: clientDTO.email, password: clientDTO.password, permissionList: '' as string, createdAt: null, updatedAt: null});

        await this.userRepository.addUser(createdUser);
        return createdUser;
    }

}

export default UserService;