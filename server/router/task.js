const express = require("express");
const router = new express.Router();
const Task = require("../model/task");
const authMiddleware = require("../middleware");
router.use(authMiddleware);

// POST /tasks
// @desc  Create a task with description and status
// @access Private
router.post("/tasks", async (req, res) => {
  const task = new Task({
    ...req.body,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET /tasks
// @desc  Fetch all tasks
// @access Private
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PATCH /tasks/:id
// @desc Update task by id
// @access Private
router.patch("/tasks/:id", async (req, res) => {
  // Check for invalid fields.
  const updates = Object.keys(req.body);
  const allowedUpdate = ["description", "completed"];
  const isValidFields = updates.every((update) =>
    allowedUpdate.includes(update)
  );
  if (!isValidFields) {
    return res
      .status(400)
      .send({ error: "You are trying to update an invalid field/s" });
  }

  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, task) => {
        if (err) {
          res.status(400).send({ error: "No task with that id" });
        }
        res.status(200).send(task);
      }
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE /tasks/:id
// @desc Detele a task by id
// @access Private
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id, (err, task) => {
      if (err) {
        res.status(400).send({ error: "No task with that id" });
      }
      res.status(200).send(task);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
