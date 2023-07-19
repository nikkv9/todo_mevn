import express from "express";
const app = express();
import "dotenv/config";
const port = process.env.port;

import { dbConnection } from "./config/db.js";
dbConnection();

import cors from "cors";
import todoRoute from "./routes/todo_route.js";

app.use(cors());
app.use(express.json());
app.use(todoRoute);

app.listen(port, (req, res) => {
  console.log(`server is running at ${port}`);
});
