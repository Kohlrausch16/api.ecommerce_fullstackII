import { AuthCredentials, AuthTokens } from "../Entities/Authentication";
import { User } from "../Entities/User";
import AuthenticationRepository from "../Repository/AuthenticationRepository";
import AuthHelper from "./ServiceHelper/AuthHelper";

class AuthenticationService{

    private authRepository = new AuthenticationRepository;
    private authHelper = new AuthHelper;

    async checkCredentials(credentials: AuthCredentials): Promise<{token: string, refreshToken: string}>{

        const foundUserAccess: User = await this.authRepository.getByEmail(credentials.email);

        await this.authHelper.compareCredentials(foundUserAccess as User, credentials as AuthCredentials);

        const token: string = await this.authHelper.generateToken(foundUserAccess, 'token');
        const refreshToken: string = await this.authHelper.generateToken(foundUserAccess, 'refresh_token');

        console.log(`Token: ${token} \n RefreshToken: ${refreshToken}`);
        return {token, refreshToken};
    }

    async validateTokens(tokens: AuthTokens){
        const token = tokens.token;
        const refresh_token = tokens.refresh_token;

        const tokenPayload: User = await this.authHelper.verifyJWT(token);
        const refreshTokenPayload: User = await this.authHelper.verifyJWT(refresh_token);

        const updatedToken: string = await this.authHelper.generateToken(tokenPayload, 'token');
        const updatedRefreshToken: string = await this.authHelper.generateToken(refreshTokenPayload, 'refresh_token');

        return {updatedToken, updatedRefreshToken};
    }

    async checkPermissions(token: string, requiredPermission: string): Promise<boolean>{

        const tokenPayload: User = await this.authHelper.verifyJWT(token);

        if(!tokenPayload.permissionList.includes(requiredPermission)){
            throw new Error('Forbbiden route!');
        }
        
        return true;
    }
}

export default AuthenticationService;