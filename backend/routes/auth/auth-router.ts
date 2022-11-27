import { Router } from "express";
import { Routes } from "../routes";

export const authRouter: Router = Router();

authRouter.post(Routes.LOGIN, () => console.log('post LOGIN'));
authRouter.post(Routes.LOGOUT, () => console.log('post LOGOUT'));