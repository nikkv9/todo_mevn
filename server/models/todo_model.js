import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
const Todo = mongoose.model("TODO", todoSchema);
export default Todo;
