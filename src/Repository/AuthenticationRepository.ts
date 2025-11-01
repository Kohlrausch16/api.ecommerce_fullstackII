import { User } from "../Entities/User";

class AuthenticationRepository{

    private db = require('../Database/dbConfig');

    async getByEmail(email: string): Promise<User>{
        const foundRecord: User[] = await this.db.exec(`SELECT * FROM user WHERE email = ?`, [email]);

        if(foundRecord.length < 1) 
            throw new Error('Email or password not valid')

        return foundRecord[0];
    }

}

export default AuthenticationRepository;