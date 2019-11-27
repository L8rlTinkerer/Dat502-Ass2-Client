import { AddProperty } from './addproperty.model';


export class AddPropertyResponse {
    success: boolean; 
    message: string;
    error: AddProperty;
    jWT: string;
}
