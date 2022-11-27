import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { authRouter, bartersRouter, lotsRouter, Routes, usersRouter } from "./routes";

dotenv.config();

const PORT: string = process.env.PORT;
const DB_URL: string = process.env.DB_URL;

const service = express();

service.use(express.json());

service.use('/', usersRouter);
service.use('/', bartersRouter);
service.use('/', lotsRouter);
service.use(Routes.AUTH, authRouter);

start();

async function start(): Promise<void> {
  try {
    await mongoose.connect(DB_URL);
    
    service.listen(PORT, () => console.log(`Server running on port ${PORT}`))

  } catch(e) {
      console.error(e);
  }
}