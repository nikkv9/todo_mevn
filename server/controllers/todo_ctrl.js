import Todo from "../models/todo_model.js";

// Create Todo
export const createTodo = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send("Please add title");
    }
    const todo = await Todo.create({
      title: req.body.title,
    });
    res.status(200).send(todo);
  } catch (error) {
    console.log(error.message);
  }
};

// Get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send("Todo has been deleted!");
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(todo);
  } catch (error) {
    console.log(error.message);
  }
};
