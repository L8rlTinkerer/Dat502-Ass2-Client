import { RegisterClientModel } from './register-client.model';

export class RegisterClientResponseModel {
    success: boolean; 
    message: string;
    error: RegisterClientModel;
    jWT: string;
}

