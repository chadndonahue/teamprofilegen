const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      employees.push(manager);
      createEmployees();
    });
}

function createEmployees() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoice",
        message: "Would you like to add another employee?",
        choices: ["Intern", "Engineer", "No"],
      },
    ])
    .then((answer) => {
      switch (answer.employeeChoice) {
        case "Intern":
          createIntern();
        //   have to up arrow to enter unless using breaks
          break;
        case "Engineer":
          createEngineer();
          break;
        case "No":
          finishTeam();
          break;
        default:
          break;
      }
    });
}
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internSchoolName",
        message: "What school does the intern go to?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchoolName
      );
      employees.push(intern);
      createEmployees();
    });
}
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is the engineer's GitHub?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.githubUsername
      );
      employees.push(engineer);
      createEmployees();
    });
}

function finishTeam() {
  console.log(employees);
  fs.writeFileSync("index.html", generateHtml(employees));
}

createManager();