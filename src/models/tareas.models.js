const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Tareas = db.define('tareas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
});


module.exports = Tareas