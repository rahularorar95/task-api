const express = require("express");
const router = new express.Router();
const Task = require('../model/task')
const authMiddleware = require('../middleware')
router.use(authMiddleware)

// POST /tasks
// @desc  Create task authored by current user
// @access Private
router.post('/tasks', async (req, res) => {
    const task = new Task({
        ...req.body
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = router;