import { User } from "../Entities/User";
import UserRepository from "../Repository/UserRepository";
import ServiceHelper from "./ServiceHelper/ServiceHelper";


class UserService{

    private userRepository = new UserRepository;
    private serviceHelper = new ServiceHelper;

    async getUsers(): Promise<User[]>{
        let users = await this.userRepository.getUsers();
        users.map((item: User) => {
            return item.permissionList = this.serviceHelper.toArray(item.permissionList as string);
        });

        return users;
    }

    async getUserById(id: string): Promise<User>{
        const foundUser: User = await this.userRepository.getUserById(id as string);
        foundUser.permissionList = this.serviceHelper.toArray(foundUser.permissionList as string);
        return foundUser;
    }

    async addUser(user: User): Promise<void>{
        user.createdAt = new Date;
        user.updatedAt = new Date;
        await this.userRepository.addUser(user);
    }

}

export default UserService;