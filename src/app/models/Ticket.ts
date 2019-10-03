
import { User } from './User';
import { Department } from './Department';
import { Priority } from './Priority';
import { Status } from './Status';


export class Ticket{
    id:number
    category:Department
    requested_by:User
    priority:Priority
    status:Status
    assigned_to:User
    start_date:Date
    requested_end_date:Date
    closed_date:Date
    message:string
}