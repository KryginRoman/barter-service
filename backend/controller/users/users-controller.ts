import { IUsersModel } from "../interfaces";

export class UsersController implements IUsersModel {
    // TODO: Добавить реализацию методов абстрактный интерфейс для модели
    constructor(private readonly usersModel?: IUsersModel) {}

    public getUsers(): unknown[] {
        return ['Alex', 'Roman'];
    }

    public createUser(payload: unknown): unknown {
        return payload;
    }

    public saveUser(payload: unknown): unknown {
        return payload;
    }

    public deleteUsers(id: number): unknown {
        return Date.now();
    }
}