var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node', //database
    'root', //user / usario
    'password', //password
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;