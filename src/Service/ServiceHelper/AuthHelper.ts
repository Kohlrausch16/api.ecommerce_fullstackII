import jwt, { Jwt, JwtPayload, SignOptions } from 'jsonwebtoken';
import { User } from '../../Entities/User';
import { AuthCredentials } from '../../Entities/Authentication';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import ServiceHelper from './ServiceHelper';

dotenv.config();

class AuthHelper{

    private tokenExpiration = process.env.TOKEN_EXPIRES_IN;
    private refreshTokenExpiration = process.env.REFRESH_TOKEN_EXPIRES_IN;
    private jwtSecret = process.env.JWT_SECRET;

    private serviceHelper = new ServiceHelper;

    async compareCredentials(foundUserAccess: User, credentials: AuthCredentials){
        await this.hashPassword(foundUserAccess.password, credentials.password);
    }

    async hashPassword(userHashPassword: string, credentialsPassword: string): Promise<void>{
        const comparission = await bcrypt.compare(credentialsPassword, userHashPassword);

        if(!comparission)
            throw new Error('Email or password not valid');
    }

    async verifyJWT(token: string): Promise<User>{
        const userPayload: User = this.toUser(jwt.verify(token, this.jwtSecret as string) as JwtPayload);  
        userPayload.permissionList = this.serviceHelper.toArray(userPayload.permissionList as string);
        return userPayload;
    }

    async decodeJWT(payload: any): Promise<string>{
        const decodedToken: Jwt | null = jwt.decode(payload, { complete : true});

        if(!decodedToken)
            throw new Error('Unable to decode token');

        return decodedToken.payload as string;
    }

    async generateToken(payload: User, option: string): Promise<string>{

        if(option === 'token'){
            return jwt.sign(payload, this.jwtSecret as string , {expiresIn: this.tokenExpiration} as SignOptions);
        }

        return jwt.sign(payload, this.jwtSecret as string , {expiresIn: this.refreshTokenExpiration} as SignOptions);
    }

    toUser(payload: JwtPayload): User{
        delete payload.iat;
        delete payload.exp;
        return payload as User;
    }
}

export default AuthHelper;