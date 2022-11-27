import { Router } from "express";
import { Routes } from "../routes";

export const bartersRouter: Router = Router();

bartersRouter.get(Routes.BARTERS, () => console.log('get barters'));
bartersRouter.post(Routes.BARTERS, () => console.log('post barters'));
bartersRouter.patch(Routes.BARTERS, () => console.log('patch barters'));
bartersRouter.delete(Routes.BARTERS, () => console.log('delete barters'));