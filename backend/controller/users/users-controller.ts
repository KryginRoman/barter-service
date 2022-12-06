import { IUser, IUsersModel } from "../../models/interfaces/users";


export class UsersController {
    constructor(private readonly model?: IUsersModel) {}

    public async getAllUsers(_: any, response: any): Promise<void> {
        try {
            const users: IUser[] = await this.model.getAll();
            
            response.json(users);
        } catch(error: unknown) {
            console.error(error);
            response.json('exception');
        }
    }

    public async getUsersById(request: any, response: any): Promise<void> {
        try {
            const { id }: Pick<IUser, 'id'> = request.body;
            const user: IUser = await this.model.getById(id);

            response.json(user);
        } catch(error: unknown) {
            console.error(error);
            response.json('exception');
        }
    }

    public async createUser(request: any, response: any): Promise<void> {
        try {
            const payload: IUser = request.body;
            const result: IUser = await this.model.create(payload);

            response.json(result);
        } catch(error: unknown) {
            console.error(error);
            response.json('exception');
        }
    }

    public async updateUser(request: any, response: any): Promise<void> {
        try {
            const payload: Partial<IUser> = request.body;
            const result: IUser = await this.model.update(payload);

            response.json(result);
        } catch(error: unknown) {
            console.error(error);
            response.json('exception');
        }
    }

    public async deleteUser(request: any, response: any): Promise<void> {
        try {
            const { id }: Pick<IUser, 'id'> = request.body;

            await this.model.delete(id);

            const result: string = Date.now().toString();

            response.json({ result });
        } catch(error: unknown) {
            console.error(error);
            response.json('exception');
        }
    }
}