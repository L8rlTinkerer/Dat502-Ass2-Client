import { RegisterStaffModel } from './register-staff.model';


export class RegisterStaffResponseModel {
    success: boolean; 
    message: string;
    error: RegisterStaffModel;
    jWT: string;
}