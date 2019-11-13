import { AddressModel } from 'src/app/shared/address.model';


export class RegisterAssistantModel {
    FirstName: string;
    LastName: string;
    UserName: string;
    UserPassword: string;
    PhoneNumber: string;
    SystemUserTypeNo: number;
    AddressNoNavigation: AddressModel;
    BranchNo: number;
    GenderNo: number;
    Salary: number;
    
}

