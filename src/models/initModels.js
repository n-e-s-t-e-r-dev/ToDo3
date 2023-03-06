const Categorie = require('./categories.models');
const subCategory = require('./sub_category');
const Tasks = require('./tareas.models');
const Users = require('./users.models');



const initModels = () => {
    Users.hasMany(Tasks, { foreignKey: 'author'});
    Tasks.belongsTo(Users,{ foreignKey: 'author'})

    Categorie.hasMany(Tasks , {foreignKey: "category"});
    Tasks.belongsTo(Tasks,{foreignKey: 'categoryId'})

    subCategory.hasMany(Categorie, {foreignKey: 'categoryId'});
    Categorie.belongsTo(subCategory, {foreignKey: 'categoryId'});
}



module.exports = initModels;