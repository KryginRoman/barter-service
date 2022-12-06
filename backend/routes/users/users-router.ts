import { Router } from "express";
import { UsersController } from "../../controller";
import { Routes } from "../routes";

export const usersRouter: Router = Router();
const usersController: UsersController = new UsersController();

usersRouter.get(Routes.USERS, (request, response) => usersController.getAllUsers(request, response));
usersRouter.post(Routes.USERS, (request, response) => usersController.createUser(request, response));
usersRouter.patch(Routes.USERS, (request, response) => usersController.updateUser(request, response));
usersRouter.delete(Routes.USERS, (request, response) => usersController.deleteUser(request, response));