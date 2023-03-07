const UsersServices = require('../services/users.services');


const CreateUsers = async (req,res) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.CreateUser(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getAllUsers = async (req,res) => {
    try {
        const users = await UsersServices.getUser();
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = {
    CreateUsers,
    getAllUsers,
}