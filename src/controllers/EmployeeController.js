const controllers = {}

//import model and sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

controllers.test = async(req, res) => {
    const response = await sequelize.sync().then(function() {
            const data = Employee.findAll()
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json(response);
}

controllers.test = (req, res) => {
    const data = {
        name: "John Smith",
        age: 24,
        city: "Marid"
    }

    console.log("Excute from controllers employee");
    res.json(data);
}

module.exports = controllers;