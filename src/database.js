const Sequelize = require('sequelize');

const sequelize = new Sequelize('mycrud','postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});


module.exports = sequelize;