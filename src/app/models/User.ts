import { Role } from "./Role";

export interface IUser{
    id:number;
    name:string;
    user_name:string;
    password:string;
    role:Role;
}