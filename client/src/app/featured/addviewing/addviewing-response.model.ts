import { Addviewing } from './addviewing.model';


export class AddviewingResponse {
    success: boolean; 
    message: string;
    error: Addviewing;
    jWT: string;
}