import { Router } from "express";
import { IUsersModel, UsersController } from "../../controller";
import { Routes } from "../routes";

export const usersRouter: Router = Router();
const usersController: IUsersModel = new UsersController();

usersRouter.get(Routes.USERS, (request, response) => {
    const users: unknown[] = usersController.getUsers();

    response.send(users);
});
usersRouter.post(Routes.USERS, () => console.log('post users'));
usersRouter.patch(Routes.USERS, () => console.log('patch users'));
usersRouter.delete(Routes.USERS, () => console.log('delete users'));