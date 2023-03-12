const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const role = require('./server');

function addDepartment() {
  inquirer
  .prompt({
    type: 'input',
    name: 'departmentName',
    message: 'Enter the name of the department',
  })
  .then((response) => {
    db.query(
    `INSERT INTO department (name)
     VALUES ('${response.departmentName}');`)
     console.log(`Added ${response.departmentName} to the database`)
     console.log("What would you like to do?")
     init();
  })
  .catch((err) => console.error(err));
};

function addRole() {
  inquirer
  .prompt({
    type: 'input',
    name: 'roleName',
    message: 'Enter the title of the role',
  })
  .then((response) => {
    db.query(
    `INSERT INTO role (name)
     VALUES ('${response.roleName}');`)
     console.log(`Added ${response.roleName} to the database`)
     // Add function to prompt for salary here...
     addSalary();
  })
  .catch((err) => console.error(err));
};

function addEmployee() {

};

function updateEmployee() {

}

  module.exports = addRole, addDepartment, addEmployee, updateEmployee; 