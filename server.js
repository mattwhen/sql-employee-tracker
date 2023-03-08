// Require packages
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

// Create a connection to Database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employee_db",
  },
  console.log("connected to the db")
);

db.connect((err) => {
  if (err) throw err; // Display error when cannot connect to db.
});

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function init() {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "help",
      choices: [],
    })
    .then((res) => {
      // think about a swich statment to chekc against all the options
    });
}

init();

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// db.query("SELECT * from department;", (err, result) => {
//   if (err) {
//       console.log(err)
//   }
//   // do something with the result
//   console.table(result)
// });
