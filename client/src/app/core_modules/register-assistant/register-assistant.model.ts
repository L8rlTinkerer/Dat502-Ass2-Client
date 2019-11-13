import { AddressModel } from 'src/app/shared/address.model';


export class RegisterAssistantModel {
    firstName: string;
    lastName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    SystemUserTypeNo: number;
    addressNoNavigation: AddressModel;
    branchNo: number;
    genderNo: number;
    salary: number;
    
}

