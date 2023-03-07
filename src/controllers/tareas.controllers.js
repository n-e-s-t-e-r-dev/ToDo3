const TasksServices = require('../services/task.services');
/*
const getAlltaskAndCategory = async (req,res) => {
    try {
        const {tasksId} = req.params;
        const taskAndCategory = await TasksServices.taskAndCategory(tasksId)
        res.json(taskAndCategory);
    } catch (error) {
        res.status(400).json(error);
    }
}

*/

const CreateTasks = async (req,res) => {
    try {
        const newTask = req.body;
        const result = await TasksServices.CreateTasks(newTask);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}


const TasksUpdate = async (req, res) => {
    try {
        const idTask = req.body;
        const result = await TasksServices.UpdateTask(idTask);
        res.status(204).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
}


const TasksDelete = async (req, res) => {
    try {
        const idTask = req.body;
        const result = await TasksServices.deleteTask(idTask);
        res.status(204).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
}

const getAlltaskAndCategory = async (req,res) => {
    try {
        const {tasksId} = req.params;
        console.log(tasksId)
        const taskAndCategorys = await TasksServices.taskAndCategory(tasksId)
        res.json(taskAndCategorys);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    CreateTasks,
    TasksUpdate,
    TasksDelete,
    getAlltaskAndCategory
}