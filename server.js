const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
// const { addDepartment, addRole, addEmployee, updateEmployee } = require('./prompt');

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
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"],
    })
    .then((res) => {
      // Do a query based on the user selection using a series of switch statements
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
          inquirer
          .prompt({
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
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
        case 'Quit':
          db.end();
          console.log('Goodbye');
      }
    }).catch((err) => console.error(err));
}

  function addRole() {
    inquirer
    .prompt([
      {
      type: 'input',
      name: 'roleName',
      message: 'Enter the name of the role',
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'Enter the salary of the role',
    },
    {
      type: 'input',
      name: 'roleDepartment',
      message: 'Enter the department ID',
    }
  ])
    .then((response) => {
      console.log(response);
      db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${response.roleName}', ${response.roleSalary}, ${response.roleDepartment})`, (err, result) => {
        if (err) console.log(err, 'System error')
        console.table(result)
        init();
      })

      console.log('Added new role to the database.')
      console.table(response);
      init();
    });
  };

  function addEmployee() {
    inquirer
    .prompt([
      {
      type: 'input',
      name: 'firstName',
      message: 'What is the employees first name?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the employees last name?',
    },
    {
      type: 'list',
      name: 'choiceName',
      message: 'Who is the employees manager?',
      choices: ['Matt Nguyen', 'John Doe']
    }
  ])
  .catch((err) => console.error('System error', err));
  }

// Invoke the init() function upon startup
init();

// module.exports = { db };