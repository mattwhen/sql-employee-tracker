const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const addRole = require('./prompt');
// Create a connection to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employee_db",
  },
  console.log("What would you like to do?")
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
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit application"],
    })
    .then((res) => {
      // think about a swich statment to check against all the options
      console.log(res.options);

      // Do a query based on the user selection
      switch(res.options) {
        case 'View all departments':
          db.query('SELECT * FROM department;', (err, result) => {
            if (err) console.log(err, 'System error')
            console.table(result)
            init();
          });
          break;
          // WHEN I choose to view all roles
          // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
        case 'View all roles':
          db.query('SELECT * FROM role', (err, result) => {
            if (err) {
              console.log(err, 'System error')
            }
            console.table(result)
            console.log("What would you like to do?")
            init();
          });
          break;
          // WHEN I choose to view all employees
          // THEN I am presented with a formatted table showing employee data, including employee ids,
          // first names, last names, job titles, departments, salaries, and 
          // managers that the employees report to
        case 'View all employees':
          db.query('SELECT * FROM employee', (err, result) => {
            if (err) console.log(err, 'System error')
            console.table(result)
            console.log("What would you like to do?")
            init();
          });
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an Employee role':
          updateEmployee();
          break;
        default:
          console.log('System error');
      }
    }).catch((err) => console.error(err));
}


  

// Invoke the init() function upon startup
init();

