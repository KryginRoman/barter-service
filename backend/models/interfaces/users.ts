import { IEntityModel } from "./models";

export interface IUser {
    id: number;
    email: string;
    contactPhone: string;
    location: string;
    firstName: string;
    secondName: string;
    lastName: string;
} 

export interface IUsersModel extends IEntityModel<IUser> {}