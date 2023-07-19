import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo_ctrl.js";

const router = express.Router();

router.post("/todo/create", createTodo);
router.get("/todo/all", getTodos);
router.delete("/todo/:id", deleteTodo);
router.put("/todo/:id", updateTodo);

export default router;
