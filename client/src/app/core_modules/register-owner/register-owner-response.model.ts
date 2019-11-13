import { RegisterOwnerModel } from './register-owner.model';


export class RegisterOwnerResponseModel {
    success: boolean; 
    message: string;
    error: RegisterOwnerModel;
    jWT: string;
}