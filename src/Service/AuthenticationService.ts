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


    async getAcess(){
        
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