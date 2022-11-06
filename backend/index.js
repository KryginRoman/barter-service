import express from "express";
import mongoose from "mongoose";

const server = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function start() {
    try {
    // TODO: Добавить урл до БД
    //   await mongoose.connect(process.env.DB_URL);
      app.listen(PORT, () =>console.log(`Server running on port ${PORT}`))
    } catch(e) {
      console.error(e);
    }
  }
  
start();