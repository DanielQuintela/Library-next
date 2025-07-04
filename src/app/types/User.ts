
export interface User {
    id             : number;
    email          : string;
    name           : string;
    password       : string;
    birth          : string;
    memberSince?   : Date
}

export interface LoginUser {
    email: string;
    password: string;
}