const express = require('express');
const {
  createTask,
  // other methods
} = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask);

module.exports = router;
