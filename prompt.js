const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require('./server');


// function addDepartment() {
//   inquirer
//   .prompt({
//     type: 'input',
//     name: 'departmentName',
//     message: 'What is the name of the department?',
//   })
//   .then((response) => {
//     db.query(
//     `INSERT INTO department (name)
//      VALUES ('${response.departmentName}');`)
//      console.log(`Added ${response.departmentName} to the database`)
//      console.log("What would you like to do?")
//      init();
//   })
//   .catch((err) => console.error(err));
// };

// function addRole() {
//   inquirer
//   .prompt({
//     type: 'input',
//     name: 'roleName',
//     message: 'Enter the title of the role',
//   })
//   .then((response) => {
//     db.query(
//     `INSERT INTO role (name)
//      VALUES ('${response.roleName}');`)
//      console.log(`Added ${response.roleName} to the database`)
//   })
//   .then((response) => {
//     console.log(response, 'this is where I prompt for the salary of the role');
//   })
//   .catch((err) => console.error(err));
// };

function addEmployee() {

};

function updateEmployee() {

}

module.exports =  { addDepartment, addRole, addEmployee, updateEmployee }; 