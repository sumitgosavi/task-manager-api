const Task = require('../models/taskModel');

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Simple validation
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const task = await Task.create({
      title,
      description,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

module.exports = {
  // other methods,
  createTask,
};