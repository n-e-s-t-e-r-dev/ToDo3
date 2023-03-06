const Categorie = require('../models/categories.models');
const Tasks = require('../models/tareas.models');

class TasksServices {
    static async CreateTasks(newTask) {
        console.log(newTask)
        try {
            const TaskCreate = await Tasks.create(newTask);
            return TaskCreate
        } catch (error) {
            throw error;
        }
    }/*
    static async taskAndCategory(tasksId) {
        try {
            const result = await Tasks.findByPk(tasksId,
                {
                    include: {
                        model: Categorie
                    }
                });
                return result;
        } catch (error) {
            throw error;
        }
    }*/
    static async UpdateTask(idTask) {
        try {
            const taskUpdate = await Tasks.update(idTask);
            return taskUpdate;
        } catch (error) {
            throw error;
        }
    }

    static async deleteTask(idTask) {
        try {
            const taskdelete = await Tasks.destroy(idTask);
            return taskdelete;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = TasksServices;
