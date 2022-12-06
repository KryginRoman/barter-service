import { IUser, IUsersModel } from "../interfaces/users";
import { User } from "../schemes/users";

export class UserModel implements IUsersModel {
    public async getAll(): Promise<IUser[]> {
        const users: IUser[] = await User.find();

        return Promise.resolve(users);
    }

    public async getById(id: number): Promise<IUser> {
        const user: IUser = await User.findOne({ id });

        return Promise.resolve(user);
    }

    public async create(payload: IUser): Promise<IUser> {
        const user: IUser = await User.create(payload);

        return Promise.resolve(user);
    }

    public async update(payload: Partial<IUser>): Promise<IUser> {
        const user: IUser = await User.create(payload);

        return Promise.resolve(user);
    }

    public async delete(id: number): Promise<string> {
        await User.deleteOne({ id });

        return Promise.resolve('success');
    }
}