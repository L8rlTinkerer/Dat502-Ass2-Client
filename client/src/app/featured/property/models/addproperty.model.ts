import { AddressModel } from 'src/app/shared/address.model';

export class AddProperty {
    OwnerNo: number;
    BranchNo: number;
    StaffNo: number;
    PropertyTypeNo: number;
    NumberOfRooms: number;
    MonthlyRent: number;
    IsPropertyActive: number;
    AddressNoNavigation: AddressModel;
}
