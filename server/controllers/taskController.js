import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }
    const userId = req.user._id;
    const newTask = new Task({ title, description, user: userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const taskId = req.params.id;
    const userId = req.user._id;
    const task = await Task.findOne({ _id: taskId, user: userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.title = title !== undefined ? title : task.title;
    task.description =
      description !== undefined ? description : task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user._id;
    if (!(await Task.findOne({ _id: taskId, user: userId }))) {
      return res.status(404).json({ message: "Task not found" });
    }
    await Task.deleteOne({ _id: taskId, user: userId });

    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
};
