// DEPENDENCIES =====================================

// a program to be able to write files
const fs = require('fs');
// a program to output questions to the user
const inquirer = require('inquirer');

// DATA =============================================
// a list of instructions for the user to answer accordingly

const userInput = [
    {
        type = "input",
        name = "team_man_name",
        message = "Input your Team Manager's name: "
    },
    {
        type = "input",
        name = "employeeID",
        message = "Input your employee ID: "
    },
    {
        type = "input",
        name = "email",
        message = "Input your email address: "
    },
    {
        type = "input",
        name = "office_num",
        message = "Input your office number: "
    },    
]

// FUNCTIONS ========================================
// USER INTERACTIONS ================================