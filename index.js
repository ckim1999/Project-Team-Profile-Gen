// DEPENDENCIES =====================================

// a program to be able to write files
const fs = require('fs');
// a program to output questions to the user
const inquirer = require('inquirer');

const options = [

]

// DATA =============================================
// a list of instructions for the user to answer accordingly
const nextArray = ["Add an Engineer", "Add an Intern", "Exit the Application"]

const userInput = [
    {
        // input manager's name
        type: "input",
        name: "team_man_name",
        message: "Input your Team Manager's name: "
    },
    {
        // input employee ID
        type: "input",
        name: "employeeID",
        message: "Input your employee ID: "
    },
    {
        // input email address
        type: "input",
        name: "email",
        message: "Input your email address: "
    },
    {
        // input office number
        type: "input",
        name: "office_num",
        message: "Input your office number: "
    },
    {
        type: "checkbox",
        name: "options",
        message: "What do you want to do next?",
        choices: nextArray,
    }    
]

// FUNCTIONS ========================================

// create a function to hold the user's input
const writeHTML = ({team_man_name, employeeID, email, office_num}) => {
    // puts user's input into the html
    const info = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!--Link to Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <!--Link to css file-->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!--created a card format to input my user's information-->
        <div class="card" style="width: 20rem;">
            <div class="card-header">Team Manager Name: ${team_man_name}</div>
            <ul>
              <li class="list-group-item">Employee ID: ${employeeID}</li>
              <a href="${email}"><li class="list-group-item">Email: ${email}</li></a>
              <li class="list-group-item">Office Number: ${office_num}</li>
            </ul>
        </div>
    </div>
</body>
</html>`
    fs.writeFileSync("web.html", info, "utf8", (err) => {
        if (err) {
            console.error(err);
        }
        console.log("Information transfer complete");
    });
}

// USER INTERACTIONS ================================

// use the inquirer function
inquirer
    .prompt(userInput)
    .then(response => {
        writeHTML(response);
    })