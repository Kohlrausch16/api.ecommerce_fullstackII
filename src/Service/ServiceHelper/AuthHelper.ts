import jwt from 'jsonwebtoken';

class AuthHelper{

    async verifyJWT(token: string, jwtSecret: string){
        return await jwt.verify(token, jwtSecret);
    }

    async signJWT(payload: any, jwtSecret: string, expirresIn: object){
        return jwt.sign(payload, jwtSecret, expirresIn);
    }


}

export default AuthHelper;

//fe94102a-2a33-45e5-8789-403a39fdce4b