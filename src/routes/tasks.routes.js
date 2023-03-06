const { Router } = require('express');
const { CreateTasks, TasksUpdate, TasksDelete } = require('../controllers/tareas.controllers');

const router = Router();

router.post('/api/v1/tasks', CreateTasks);
router.put('/api/v1/tasks/:id', TasksUpdate);
router.put('/api/v1/tasks/:id', TasksDelete);


module.exports = router;