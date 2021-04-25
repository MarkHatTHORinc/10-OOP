// -----------------------------------------------------------------------------
// Program:  index.js
// Purpose:  1) Display the directions for using this program
//           2) Get a valid template file name
//           3) Get an output file name
//           4) Call file functions from fileGenerator to generate actual file.
// Input:    argv[2] <optional> template file name 
//           argv[3] <optional> output file name 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 12, 2021
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
// Node library package for reading and writing files
const fs = require("fs");
// Node library package for terminal input/output
const inquirer = require("inquirer");
const TeamMember = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

// -----------------------------------------------------------------------------
// Global Variables Section
// -----------------------------------------------------------------------------
let teamName = "";
let teamMembers = [];
let teamId = 0;
let outputDir = "./dist/";

// -----------------------------------------------------------------------------
// Function: addTeamName
// Purpose:  Prompt the user to input the team name and store it.
// Input:    <none> 
// Returns:  <none> 
// -----------------------------------------------------------------------------
function addTeamName() {
    inquirer.prompt([
        {
            message: "What is the team's name?",
            name: "name"
        }
    ])
        .then(function (data) {
            teamName = data.name.trim();
            addManager();
        })
}


// -----------------------------------------------------------------------------
// Function: addManager
// Purpose:  Prompt the user for Manager Information and store it.
// Input:    <none> 
// Returns:  <none> 
// -----------------------------------------------------------------------------
function addManager() {
    inquirer.prompt([
        {
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            message: "What is the team manager's email address?",
            name: "email"
        },
        {
            type: "number",
            message: "What is the team manager's office number?",
            name: "officeNumber"
        },
    ])
        .then(function (data) {
            const name = data.name;
            const email = data.email;
            const officeNumber = data.officeNumber;
            teamId++;
            const teamMember = new Manager(name, teamId, email, officeNumber);
            teamMembers.push(teamMember);
            addTeamMembers();  // prompt to add engineers / interns
        });
}


// -----------------------------------------------------------------------------
// Function: addTeamMembers
// Purpose:  Prompt the user to see what type of team member to add.
// Input:    <none> 
// Returns:  <none> 
// -----------------------------------------------------------------------------
function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "What team member would you like to add?",
            choices: ["Add an Engineer", "Add an Intern", "I am done"],
            name: "addAnswer"
        }
    ])
        .then(function (data) {
            switch (data.addAnswer) {
                case "Add an Engineer":
                    addEngineer();
                    break;
                case "Add an Intern":
                    addIntern();
                    break;
                case "I am done":
                    generateHTML();
                    break;
            }
        });
}


// -----------------------------------------------------------------------------
// Function: addEngineer
// Purpose:  Prompt the user for Engineer Information and store it.
// Input:    <none> 
// Returns:  <none> 
// -----------------------------------------------------------------------------
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            message: "What is the engineer's GitHub URL?",
            name: "github"
        }
    ])
        .then(function (data) {
            const name = data.name;
            const email = data.email;
            const github = data.github;
            teamId++;
            const teamMember = new Engineer(name, teamId, email, github);
            teamMembers.push(teamMember);
            addTeamMembers()    // prompt to add engineers / interns
        });
};


// -----------------------------------------------------------------------------
// Function: addIntern
// Purpose:  Prompt the user for Intern Information and store it.
// Input:    <none> 
// Returns:  <none> 
// -----------------------------------------------------------------------------
function addIntern() {
    inquirer.prompt([
        {
            message: "What is th3 intern's name?",
            name: "name"
        },
        {
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            message: "What is the intern's school?",
            name: "school"
        }
    ])
        .then(function (data) {
            const name = data.name;
            const email = data.email;
            const school = data.school;
            teamId++;
            const teamMember = new Intern(name, teamId, email, school);
            teamMembers.push(teamMember);
            addTeamMembers()    // prompt to add engineers / interns
        });
};


// -----------------------------------------------------------------------------
// Function: getHTMLStart
// Purpose:  Get the starting section of the HTML file.
// Input:    <none> 
// Returns:  <string> HTML 
// -----------------------------------------------------------------------------
function getHTMLStart() {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team ${teamName}</title>
        <!-- Display a favicon in tab -->
        <link rel="shortcut icon" type="image/jpg" href="./favicon.ico"/>
        <!--Reset all CSS so we don't have browser specific-->
        <link rel="stylesheet" href="./css/reset.css" />
        <link rel="stylesheet" href="./css/style.css" />
    
        </head>
        <body>
            <div class="banner-bar">
                <h1>${teamName}</h1>
            </div>
            <div class="card-container">
    `
}


// -----------------------------------------------------------------------------
// Function: getHTMLEnd
// Purpose:  Get the ending section of the HTML file.
// Input:    <none> 
// Returns:  <string> HTML 
// -----------------------------------------------------------------------------
function getHTMLEnd() {
    return `
            </div>
        </body>
    </html>
    `
}


// -----------------------------------------------------------------------------
// Function: getHTMLCard
// Purpose:  Get the team member card section of the HTML file.
// Input:    <none> 
// Returns:  <string> HTML 
// -----------------------------------------------------------------------------
function getHTMLCard(teamMember) {
    let htmlCard = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamMember.name}</h2>
                <h2>${teamMember.title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamMember.id}</p>
                <p>Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a>></p>
        `
    if (teamMember.officeNumber) {
        htmlCard += `
            <p>Office: ${teamMember.officeNumber}</p>
            `
    }
    if (teamMember.gitHub) {
        htmlCard += `
            <p>GitHub: <a href="https://github.com/${teamMember.gitHub}" target="_blank">${teamMember.gitHub}</a></p>
            `
    }
    if (teamMember.school) {
        htmlCard += `
            <p>School: ${teamMember.school}</p>
            `
    }
    htmlCard += `
            </div>
        </div>
        `
    return htmlCard;
}


// -----------------------------------------------------------------------------
// Function: generateHTML
// Purpose:  Generate HTML and write to file system.
// Input:    <none> 
// Returns:  <none> 
// -----------------------------------------------------------------------------
function generateHTML() {

    let htmlData = getHTMLStart();

    // Add the cards for each team member
    for (let i = 0; i < teamMembers.length; i++) {
        htmlData += getHTMLCard(teamMembers[i]);
    }

    htmlData += getHTMLEnd();
    fs.writeFile(`${outputDir}Team_${teamName}.html`, htmlData, (err) => {
        if (err)
            console.log(`The following error occurred when writing to the file: ${err}`)
        else
            console.log(`The following HTML file was generate: ${outputDir}Team_${teamName}.html`)
    })
}


// --------------------------------------------------------------------------------------------------------------
// MAINLINE
// Purpose:  This code is executed when the program is loaded into memory.
// --------------------------------------------------------------------------------------------------------------
addTeamName();