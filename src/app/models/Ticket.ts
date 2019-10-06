import { Department } from './Department';
import { Priority } from './Priority';
import { Status } from './Status';
import { User } from './User';

export class Ticket {
    id:number;
    category:Department = new Department();
    requested_by:User = new User();
    priority:Priority = new Priority();
    status:Status;
    assigned_to:User;
    start_date:Date = new Date();
    requested_end_date:Date = new Date();
    closed_date:Date;
    message:string;
}
