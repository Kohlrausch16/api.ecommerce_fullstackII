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
        let foundUsers: User[] = await this.userRepository.getUsers();
    
        foundUsers.map((item: User) => {
            item.permissionList = this.serviceHelper.toArray(item.permissionList as string);
        });

        return foundUsers;
    }

    async getUserById(id: string): Promise<User>{
        const foundUser = await this.userRepository.getUserById(id);
        foundUser.permissionList = this.serviceHelper.toArray(foundUser.permissionList as string);
        return foundUser;
    }

    async addUser(clientDTO: ClientDTO): Promise<User>{
        const createdUser: User = await this.classConstructor.userConstructor({id: '', userName: clientDTO.firstName + ' ' + clientDTO.lastName, email: clientDTO.email, password: clientDTO.password, permissionList: '' as string, createdAt: null, updatedAt: null});

        await this.userRepository.addUser(createdUser);
        return createdUser;
    }

    async updateUser(id: string, user: User): Promise<void>{
        await this.userRepository.updateUser(id, user);
    }

    async deleteUser(id: string): Promise<string>{
        return await this.userRepository.deleteUser(id);
    }
}

export default UserService;