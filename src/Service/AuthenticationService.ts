import { AuthCredentials } from "../Entities/Authentication";
import { User } from "../Entities/User";
import AuthenticationRepository from "../Repository/AuthenticationRepository";
import AuthHelper from "./ServiceHelper/AuthHelper";
import dotenv from 'dotenv';

dotenv.config();

class AuthenticationService{

    private authRepository = new AuthenticationRepository;
    private authHelper = new AuthHelper;
    private tokenExpiration = process.env.TOKEN_EXPIRES_IN;
    private refreshTokenExpiration = process.env.REFRESH_TOKEN_EXPIRES_IN;
    private jwtSecret = process.env.JWT_SECRET;
    private jwtExpiration = process.env.TOKEN_EXPIRES_IN;


    async getCredentials(credentials: AuthCredentials){
        const foundUserAccess = await this.authRepository.getByEmail(credentials.email, 'user');
        const foundClientAccess = await this.authRepository.getByEmail(credentials.email, 'client');

        console.log(foundClientAccess, foundUserAccess);
    
    }

    async token(token: string){
        const decoded = await this.authHelper.verifyJWT(token, this.jwtSecret as string);
         
        if(!decoded){
            throw new Error('Token/Refresh token not valid.');
        }
    }

    async refreshToken(refreshToken: string){

    }

    

}

export default AuthenticationService;