export interface IUsersModel {
    getUsers(): unknown[];
    createUser(payload: unknown): unknown;
    saveUser(payload: unknown): unknown;
    deleteUsers(id: number): unknown
}