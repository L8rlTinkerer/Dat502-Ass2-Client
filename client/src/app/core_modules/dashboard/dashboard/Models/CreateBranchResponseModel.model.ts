import { AddressModel } from 'src/app/shared/address.model';

export class CreateBranchResponseModel {
    success: boolean; 
    message: string;
    error: AddressModel;
    jWT: string;
    
}
