
class AuthHelper{

    private jwt = require('jsonwebtoken');

    async decodeJWT(token: any){
        console.log(` -> Bateu na verificação de token!`);

        console.log(this.jwt.verify(token, 'fe94102a-2a33-45e5-8789-403a39fdce4b'));
    }


}

export default AuthHelper;

//fe94102a-2a33-45e5-8789-403a39fdce4b