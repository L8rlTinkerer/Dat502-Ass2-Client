import { CreateClientBranchRegoModel } from './CreateClientBranchRegoModel.model';

export class CreateClientBranchRegoResponseModel {
    success: boolean; 
    message: string;
    error: CreateClientBranchRegoModel;
    jWT: string;
}