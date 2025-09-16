import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../../Entities/User';
import { AuthCredentials } from '../../Entities/Authentication';
import bcrypt from 'bcrypt';

class AuthHelper{

    async compareCredentials(foundUserAccess: User, credentials: AuthCredentials){
        await this.hashPassword(foundUserAccess.password, credentials.password);
    }

    async hashPassword(userHashPassword: string, credentialsPassword: string): Promise<void>{
        const comparission = await bcrypt.compare(credentialsPassword, userHashPassword);

        if(!comparission)
            throw new Error('Email or password not valid');
    }

    async verifyJWT(token: string, jwtSecret: string): Promise<string | JwtPayload>{
        return await jwt.verify(token, jwtSecret);
    }

    async signJWT(payload: any, jwtSecret: string, expirresIn: object): Promise<string | JwtPayload>{
        return jwt.sign(payload, jwtSecret, expirresIn);
    }
}

export default AuthHelper;