import { AddressModel } from './address.model';

export class RegisterClientModel {
    firstName: string;
    lastName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    addressNoNavigation: AddressModel;
    systemUserTypeNo: number = 4; 
    
}
