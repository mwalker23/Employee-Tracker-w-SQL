const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: '',
      database: 'departments_db'
    },
    console.log(`Connected to the departments_db database.`)
  ); 
  
function mainMenu(){
inquirer.prompt ([
    {
        type: "list",
        name: "menuChoices",
        message: "What would you like to view?",
        choices: ["view all departments","add a department", "view all roles", "add a role", 
        "update an employee role","view all employees","add an employee"]
    }
]) .then (answers => {
    if (answers.menuChoices === "view all departments" ) {
        viewAllDep ()
    }
   
        if (answers.menuChoices === "view all roles" ) {
            viewAllRoles ()
        }

        if (answers.menuChoices === "view all employees" ) {
            viewAllEmp ()
        }
})
};


function viewAllDep (){
const viewDep = ` SELECT * FROM departments`;
db.query(viewDep, (err,results) => {
if (err) throw err;
console.table(results);
})
}


function viewAllRoles (){
    const viewRoles = ` SELECT * FROM role`;
    db.query(viewRoles, (err,results) => {
    if (err) throw err;
    console.table(results);
    })
    }

    
    function viewAllEmp (){
        const viewEmployees = ` SELECT * FROM employee`;
        db.query(viewEmployees, (err,results) => {
        if (err) throw err;
        console.table(results);
        })
        }
        

mainMenu ();


// THEN I am presented with the following options: view all departments, 
// view all roles, view all employees, add a department, add a role, 
// add an employee, and update an employee role

// const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }

// console.table(result);

//   });