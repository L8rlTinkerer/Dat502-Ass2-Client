import { AddressModel } from './address.model';

export class Register2Model {
    firstName: string;
    lastName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    addressNoNavigation: AddressModel;
    systemUserType: number = 4;
    preferredAccomodationType: string;
    maximumRent: number;
    
    
}
