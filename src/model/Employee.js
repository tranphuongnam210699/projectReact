const Sequelize = require('sequelize');
var sequelize = require('./database');

//import Role for FK RoleID
var Role = require('./Role');
var nametable = 'empleado';

var Employee = sequelize.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.BIGINT,
    roleId: {
        type: Sequelize.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    }
})

Employee.belongTo(Role);

module.exports = Employee;