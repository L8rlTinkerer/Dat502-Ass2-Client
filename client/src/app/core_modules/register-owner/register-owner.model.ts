import { AddressModel } from 'src/app/shared/address.model';


export class RegisterOwnerModel {
    FirstName: string;
    LastName: string;
    UserName: string;
    UserPassword: string;
    PhoneNumber: string;
    SystemUserTypeNo: number;
    AddressNoNavigation: AddressModel;
    IsActive: number;
}

