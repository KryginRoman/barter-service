export interface IEntityModel<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    create(payload: T): Promise<T>;
    update(payload: Partial<T>): Promise<T>;
    delete(id: number): Promise<string>;
}