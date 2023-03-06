const Categorie = require('../models/categories.models');
const Users = require('../models/users.models');

class UsersServices {
    static async CreateUser(newUser) {
        try {
            const userCreate = await Users.create(newUser);
            return userCreate
        } catch (error) {
            throw error;
        }
    }
    static async getUser() {
        try {
            const user = await Users.findAll();
            return user
        } catch (error) {
            throw error;
        }
    }
    static async taskAndCategory(tasksId) {
        try {
            const result = await Users.findByPk(tasksId,
                {
                    include: {
                        model: Categorie
                    }
                });
                return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UsersServices;