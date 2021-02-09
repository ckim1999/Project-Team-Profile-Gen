// DEPENDENCIES =====================================

// a program to be able to write files
const fs = require('fs');
// a program to output questions to the user
const inquirer = require('inquirer');

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
        // provide user with options for what they want to do next
        type: "list",
        name: "options",
        message: "What do you want to do next?",
        choices: nextArray,
        default: "Add an Engineer"
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
    <!--input header-->
    <h1>Team Profile Generator</h1>
    <div class="container">
        <!--created a card format to input my user's information-->
        <div class="card" style="width: 20rem; padding: 40px"">
            <div class="card-header">Team Manager Name: ${team_man_name}</div>
            <ul class="list-group list-group-flush">
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
        // if the user was to select the first option in the list
        if (response.options === nextArray[0]) {
            console.log("\n" + "You chose to fill out an Engineer form" + "\n");
            // saving a function named engineer that takes a list of questions and then asks them via inquirer
            var engineer = engineer_questions => inquirer.prompt(engineer_questions);
            // user picks engineer a list of questions will be need be answered to generate the profile for an engineer
            var engineer_questions = engineer_questions = [
                {
                    // input engineer's name
                    type: "input",
                    name: "engine",
                    message: "Input engineer's name: "
                },
                {
                    // input engineer's ID
                    type: "input",
                    name: "engineID",
                    message: "Input engineer's ID: "
                },
                {
                    // input engineer's name
                    type: "input",
                    name: "engineMail",
                    message: "Input engineer's email address: "
                },
                {
                    // input engineer's name
                    type: "input",
                    name: "GitHub",
                    message: "Input engineer's GitHub username: "
                },
                {
                    // provide user with options for what they want to do next
                    type: "list",
                    name: "options",
                    message: "What do you want to do next?",
                    choices: nextArray,
                    default: "Add an Engineer"
                }
            ];
            engineer(engineer_questions);
        // if the user was to select the second option in the list
        } else if (response.options === nextArray[1]) {
            console.log("\n" + "You chose to fill out an Intern form" + "\n");
            // saving a function named engineer that takes a list of questions and then asks them via inquirer
            var intern = intern_questions => inquirer.prompt(intern_questions);
            var intern_questions = intern_questions = [
                {
                    // input intern's name
                    type: "input",
                    name: "intern",
                    message: "Input intern's name: "
                },
                {
                    // input intern's ID
                    type: "input",
                    name: "internID",
                    message: "Input intern's ID: "
                },
                {
                    // input intern's name
                    type: "input",
                    name: "internMail",
                    message: "Input intern's email address: "
                },
                {
                    // input engineer's name
                    type: "input",
                    name: "school",
                    message: "Input the intern's school: "
                },
                {
                    // provide user with options for what they want to do next
                    type: "list",
                    name: "options",
                    message: "What do you want to do next?",
                    choices: nextArray,
                    default: "Add an Engineer"
                }
            ];
            intern(intern_questions);
        } else {
            // close the application
            console.log("this application will close now");
            process.exit();
        }
        writeHTML(response);

    })