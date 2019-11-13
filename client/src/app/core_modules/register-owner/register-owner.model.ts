import { AddressModel } from 'src/app/shared/address.model';


export class RegisterOwnerModel {
    firstName: string;
    lastName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    systemUserTypeNo: number;
    addressNoNavigation: AddressModel;
    isActive: number;
}

