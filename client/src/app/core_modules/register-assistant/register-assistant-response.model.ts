import { RegisterAssistantModel } from './register-assistant.model';


export class RegisterAssistantResponseModel {
    success: boolean; 
    message: string;
    error: RegisterAssistantModel;
    jWT: string;
}