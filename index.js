const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db/connection");

async function presentOptions() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);

  if (answer.options === "View all departments") {
    viewAllDepartments();
  } else if (answer.options === "View all roles") {
    viewAllRoles();
  } else if (answer.options === "View all employees") {
    viewAllEmployees();
  } else if (answer.options === "Add a department") {
    addDepartment();
  } else if (answer.options === "Add a role") {
    addRole();
  } else if (answer.options === "Add an employee") {
    addEmployee();
  } else if (answer.options === "Update an employee role") {
    updateEmployeeRole();
  }
}

async function viewAllDepartments() {
  const departments = await db.query("SELECT * FROM departments");

  console.table(departments);
  presentOptions();
}

async function viewAllRoles() {
  const roles = await db.query("SELECT roles.id AS ID, roles.title AS Job_Title, departments.name AS Department, roles.salary AS Salary FROM roles JOIN departments ON roles.department_id = departments.id");

  console.table(roles);
  presentOptions();
}

async function viewAllEmployees() {
  const employees = await db.query("SELECT * FROM employees");

  console.table(employees);
  presentOptions();
}

async function addDepartment() {}

async function addEmployee() {

  const roles = await db.query("SELECT * FROM roles");
  
  const employees = await db.query("SELECT * FROM employees");
  
const roleChoices = roles.map((role) => {
  return {
    name: role.title,
    value: role.id,
  };
});
const supervisorChoices = employees.map((employees) => {
  return {
    name: employees.name,
    value: employees.id,
  };
});

const answers = await inquirer.prompt([
  {
    type: "list",
    name: "role_id",
    message: "Choose a role",
    choices: roleChoices,
  },
  {
    type: "input",
    name: "fist_name",
    message: "What is the employees first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employees last name?",
  },
  {
    type: "list",
    name: "manager",
    message: "Who is this employees manager?",
    choices: supervisorChoices,
  }
]);

await db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answers.fist_name, answers.last_name, answers.role_id, answers.manager])

  presentOptions();

}

async function addRole() {
  
  const departments = await db.query("SELECT * FROM departments");
  
  const choices = departments.map((department) => {
    return {
      name: department.name,
      value: department.id,
    };
  });

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "department_id",
      message: "Choose a department",
      choices: choices,
    },
    {
      type: "input",
      name: "title",
      message: "What is the Job Title?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the Jobs Salary?",
    }
  ]);

  await db.query("INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)", [answers.title, answers.salary, answers.department_id])

  presentOptions();

}

async function updateEmployeeRole() {}

presentOptions();
