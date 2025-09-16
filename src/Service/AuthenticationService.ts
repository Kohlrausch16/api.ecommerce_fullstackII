import { AuthCredentials } from "../Entities/Authentication";
import { User } from "../Entities/User";
import AuthenticationRepository from "../Repository/AuthenticationRepository";
import AuthHelper from "./ServiceHelper/AuthHelper";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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

        const token: string = await this.generateToken(foundUserAccess);
        const refreshToken: string = await this.generateToken(foundUserAccess);

        console.log(`Token: \n ${token} \n RefreshToken: \n ${refreshToken}`);
        
    }

    async generateToken(payload: User): Promise<string>{
       return jwt.sign(payload, 'c01ffcba-e5bf-4d7e-b6ce-81eb8d21f9ef', {expiresIn: '1h'});
    }


    

}

export default AuthenticationService;