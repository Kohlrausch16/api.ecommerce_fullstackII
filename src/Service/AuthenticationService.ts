import AuthenticationRepository from "../Repository/AuthenticationRepository";
import AuthHelper from "./ServiceHelper/AuthHelper";

class AuthenticationService{

    private authRepository = new AuthenticationRepository;
    private authHelper = new AuthHelper;

    async token(token: string){
        this.authHelper.decodeJWT(token);
    }

    async refreshToken(refreshToken: string){

    }

    

}

export default AuthenticationService;