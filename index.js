const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db/connection");

async function viewAllDepartments() {
  const departments = await db.query("SELECT * FROM departments");

  console.table(departments);
}

async function viewAllRoles() {
  const roles = await db.query("SELECT * FROM roles");

  console.table(roles);
}

async function viewAllEmployees() {
  const employees = await db.query("SELECT * FROM employees");

  console.table(employees);
}

async function createRole() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "department_id",
      message: "choose a department",
      choices: [
        { name: "Sales", value: 1 },
        { name: "Accounting", value: 2 },
      ],
    },
  ]);
}
