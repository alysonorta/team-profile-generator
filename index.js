const inquirer = require("inquirer");


//adding inquirer prompt questions to retrieve user input
inquirer
.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "role",
        message: "What is the employee's role?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the employee's GitHub username?"
    },
    {
        type: "input",
        name: "school",
        message: "Where does the employee attend school?"
    },
    {
        type: "input",
        name: "officenum",
        message: "What is the office number of the manager?"
    }
])