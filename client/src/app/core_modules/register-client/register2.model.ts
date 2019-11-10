import { AddressModel } from 'src/app/shared/address.model';


export class Register2Model {
    FirstName: string;
    LastName: string;
    UserName: string;
    UserPassword: string;
    PhoneNumber: string;
    SystemUserTypeNo: number;
    AddressNoNavigation: AddressModel;
    PreferredAccomodationType: string;
    MaximumRent: number;
    IsActive: number;
    
    
}
