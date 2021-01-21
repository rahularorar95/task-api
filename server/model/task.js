const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.methods.toJSON = function () {
  const task = this;
  const taskObject = task.toObject();
  taskObject.id = taskObject._id;

  delete taskObject._id;
  delete taskObject.createdAt;
  delete taskObject.updatedAt;
  delete taskObject.__v;

  return taskObject;
};

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
