import { RegisterSupervisorModel } from './register-supervisor.model';


export class RegisterSupervisorResponseModel {
    success: boolean; 
    message: string;
    error: RegisterSupervisorModel;
    jWT: string;
}