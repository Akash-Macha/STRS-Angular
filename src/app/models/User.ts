import { Role } from "./Role";

export class User{
    id?:number;
    name?:string;
    user_name:string;
    password:string;
    role?:Role;
}