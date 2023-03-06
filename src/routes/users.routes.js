const { Router } = require('express');
const { CreateUsers, getAllUsers, getAlltaskAndCategory } = require('../controllers/users.controllers');

const router = Router();

router.get('/api/v1/users/:tasksyId/category', getAlltaskAndCategory);

router.get('/api/v1/users', getAllUsers);

router.post('/api/v1/users', CreateUsers);


module.exports = router;