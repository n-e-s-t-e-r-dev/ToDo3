const { Router } = require('express');
const { CreateTasks, TasksUpdate, TasksDelete, getAlltaskAndCategory } = require('../controllers/tareas.controllers');

const router = Router();

router.post('/api/v1/tasks', CreateTasks);
router.put('/api/v1/tasks/:id', TasksUpdate);
router.delete('/api/v1/tasks/:id', TasksDelete);
router.get('/api/v1/tasks/:tasksId/category', getAlltaskAndCategory);


module.exports = router;