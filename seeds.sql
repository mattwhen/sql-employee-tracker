INSERT INTO department (name)
VALUES ('Accounting'), ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 50000, 1), ('Senior Engineer', 100000, 2); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Matt', 'Nguyen', 1, NULL), ('Vinnie', 'Lopez', 2, 1);