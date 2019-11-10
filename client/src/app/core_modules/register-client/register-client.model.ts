import { AddressModel } from 'src/app/shared/address.model';


export class RegisterClientModel {
    firstName: string;
    lastName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    addressNoNavigation: AddressModel;
    systemUserTypeNo: number = 4; 
    
}
