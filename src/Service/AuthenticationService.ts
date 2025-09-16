import { AuthCredentials } from "../Entities/Authentication";
import { User } from "../Entities/User";
import AuthenticationRepository from "../Repository/AuthenticationRepository";
import AuthHelper from "./ServiceHelper/AuthHelper";
import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';

dotenv.config();

class AuthenticationService{

    private authRepository = new AuthenticationRepository;
    private authHelper = new AuthHelper;
    private tokenExpiration = process.env.TOKEN_EXPIRES_IN;
    private refreshTokenExpiration = process.env.REFRESH_TOKEN_EXPIRES_IN;
    private jwtSecret = process.env.JWT_SECRET;


    async checkCredentials(credentials: AuthCredentials){
        const foundUserAccess: User = await this.authRepository.getByEmail(credentials.email);
        await this.authHelper.compareCredentials(foundUserAccess as User, credentials as AuthCredentials);

        const token: string = await this.generateToken(foundUserAccess, this.jwtSecret as jwt.Secret, '1h' as string);
        const refreshToken: string = await this.generateToken(foundUserAccess, this.jwtSecret as jwt.Secret, '6h' as string);
        
        return {token, refreshToken};
    }

    async generateToken(payload: User, secret: jwt.Secret, expirationTime: string): Promise<string>{
       return jwt.sign(payload, secret , {expiresIn: expirationTime} as SignOptions);
    }


    

}

export default AuthenticationService;