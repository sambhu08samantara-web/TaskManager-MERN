const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  deleteCompletedTasks,
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Task
router.post("/", authMiddleware, createTask);

// Get All Tasks
router.get("/", authMiddleware, getTasks);

// Get Single Task
router.get("/:id", authMiddleware, getTask);

// Update Task
router.put("/:id", authMiddleware, updateTask);

// Delete Task
router.delete("/:id", authMiddleware, deleteTask);

// Delete All Completed Tasks
router.delete("/completed/all", authMiddleware, deleteCompletedTasks);

module.exports = router;