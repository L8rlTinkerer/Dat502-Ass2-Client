import { AddressModel } from 'src/app/shared/address.model';

export class CreateBranchModel {
    systemUserNo: number;
    AddressNoNavigation: AddressModel;    
    phone: string;
}