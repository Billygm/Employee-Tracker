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
  const roles = await db.query("SELECT * FROM roles");

  console.table(roles);
  presentOptions();
}

async function viewAllEmployees() {
  const employees = await db.query("SELECT * FROM employees");

  console.table(employees);
  presentOptions();
}

async function addDepartment() {}

async function addEmployee() {}

async function addRole() {
  const departments = [
    {
      id: 1,
      name: "Sales",
    },
    {
      id: 2,
      name: "Finance",
    },
    {
      id: 3,
      name: "Engineering",
    },
    {
      id: 4,
      name: "Leagal",
    },
  ];

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
      message: "choose a department",
      choices: choices,
    },
  ]);
}

async function updateEmployeeRole() {}

presentOptions();
