const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const SubCategory = db.define('sub_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }

},{timestamps: false});


module.exports = SubCategory;