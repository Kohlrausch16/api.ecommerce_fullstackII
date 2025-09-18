export type AuthJWT = {
    header: string;
    payload: string;
    secret: string;
}

export type AuthCredentials = {
    email: string;
    password: string;
}

export type AuthTokens = {
    token: string;
    refresh_token: string;
}