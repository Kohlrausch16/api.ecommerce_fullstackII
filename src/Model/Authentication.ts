export type AuthJWT = {
    header: string;
    payload: string;
    secret: string;
}

export type AuthCredentials = {
    email: string;
    password: string;
}