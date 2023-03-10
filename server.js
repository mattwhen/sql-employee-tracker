// Require packages
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

// Create a connection to database
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
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    })
    .then((res) => {
      // think about a swich statment to check against all the options
      console.log(res.options);

      // Do a query based on the user selection
      switch(res.options) {
        case 'View all departments':
          db.query('SELECT * from department;', (err, result) => {
            if (err) {
                console.log(err, 'System error')
            }
            // Display the department table to the user in the terminal
            console.table(result)
          });
          break;
          // WHEN I choose to view all roles
          // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
        case 'View all roles':
          db.query('SELECT * FROM role AND', (err, result) => {
            if (err) {
              console.log(err, 'System error')
            }
            console.table(result)
          });
          break;
          // WHEN I choose to view all employees
          // THEN I am presented with a formatted table showing employee data, including employee ids,
          // first names, last names, job titles, departments, salaries, and 
          // managers that the employees report to
        case 'View all employees':
          db.query('', (err, result) => {
            if (err) {
              console.log(err, 'System error')
            }
          });
          console.table(result)
          break;
          // WHEN I choose to add a department
          // THEN I am prompted to enter the name of the department and that department is added to the database
        case 'Add a department':
          db.query('')
        default:
          console.log('System error');
      }
    }).catch((err) => console.error(err));
    
}

// Invoke the init() function upon startup
init();

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids


