const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, getDashboard } = require('../Controllers/authController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createTask);
router.get('/', authenticate, getTasks);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);
router.get('/dashboard', authenticate, getDashboard);

module.exports = router;
