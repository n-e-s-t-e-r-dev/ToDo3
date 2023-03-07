
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


}

module.exports = UsersServices;