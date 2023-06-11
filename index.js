const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    password: "",
    database: "departments_db",
  },
  console.log(`Connected to the departments_db database.`)
);

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuChoices",
        message: "What would you like to view?",
        choices: [
          "view all departments",
          "add a department",
          "view all roles",
          "add a role",
          "update an employee role",
          "view all employees",
          "add an employee",
        ],
      },
    ])
    .then((answers) => {
      if (answers.menuChoices === "view all departments") {
        viewAllDep();
      }
      if (answers.menuChoices === "add a department") {
        addDep();
      }

      if (answers.menuChoices === "view all roles") {
        viewAllRoles();
      }
      if (answers.menuChoices === "add a role") {
        addRole();
      }

      if (answers.menuChoices === "update an employee") {
        newEmpInfo();
      }
      if (answers.menuChoices === "view all employees") {
        viewAllEmp();
      }
      if (answers.menuChoices === "add an employee") {
        addEmp();
      }
    });
}

function viewAllDep() {
  const viewDep = ` SELECT * FROM departments`;
  db.query(viewDep, (err, results) => {
    if (err) throw err;
    console.table(results);
    mainMenu();
  });
}

function addDep() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "department_name",
            message: "What is the name of the Department?",
        }
    ]) .then ((answers) => {
        const newDep= ` INSERT INTO departments SET ?`
        db.query(newDep, answers, (err,results) => {
            if (err) throw err;
            console.table(results);
            mainMenu();
        })
    } )
}

function viewAllRoles() {
  const viewRoles = ` SELECT * FROM role`;
  db.query(viewRoles, (err, results) => {
    if (err) throw err;
    console.table(results);
    mainMenu();
  });
}

function addRole() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "title",
            message: "What is the name of the Role?",
        }
    ]) .then ((answers) => {
        const newRole= ` INSERT INTO role SET ?`
        db.query(newRole, answers, (err,results) => {
            if (err) throw err;
            console.table(results);
            mainMenu();
        })
    } )
}

function viewAllEmp() {
  const viewEmployees = ` SELECT * FROM employee`;
  db.query(viewEmployees, (err, results) => {
    if (err) throw err;
    console.table(results);
    mainMenu();
  });
}

function addEmp() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "first_name" + "last_name" + "",
            message: "What is the employees name?",
        }
    ]) .then ((answers) => {
        const newEmp = `INSERT INTO employee SET ?`
        db.query(newEmp, answers, (err, results) => {
            if (err) throw err;
            console.table(results);
            mainMenu();
    })
  });
};

mainMenu();
