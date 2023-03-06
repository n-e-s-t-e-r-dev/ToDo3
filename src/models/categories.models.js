const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Categorie = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    subCategory: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "sub_category"
    },

},{timestamps: false});


module.exports = Categorie;