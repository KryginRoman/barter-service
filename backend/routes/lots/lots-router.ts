import { Router } from "express";
import { Routes } from "../routes";

export const lotsRouter: Router = Router();

lotsRouter.get(Routes.LOTS, () => console.log('get lots'));
lotsRouter.post(Routes.LOTS, () => console.log('post lots'));
lotsRouter.patch(Routes.LOTS, () => console.log('patch lots'));
lotsRouter.delete(Routes.LOTS, () => console.log('delete lots'));