// import Employee classes
import { Engineer } from './lib/engineer.js';
import { Intern } from "./lib/intern.js";
import { Manager } from "./lib/manager.js";

// import inquirer
import inquirer from "inquirer";

// import fs to generate HTML
import * as fs from 'fs';
// create html file path
const htmlFilePath = "./htmlOutput/index.html"


// array of objects for team members created
const membersInput = [];

// initial prompted questions to create manager first
inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Enter manager's name",
    },
    {
        name:"id",
        type:"input",
        message:"Enter manager's employee Id",
    },
    {
        name:"email",
        type:"input",
        message:"Enter manager's email",
    },
    {
        name:"officeNum",
        type:"input",
        message:"Enter manager's office number",
    },
    {
        name:"addMember",
        type:"list",
        message:"Add team member?",
        choices:["Engineer", "Intern", "No"]
    },
])

.then (answerInput => {
    // create manager and add data to membersInput
    let manager = new Manager(answerInput.name, answerInput.id, answerInput.email, answerInput.officeNum);
    membersInput.push(manager);
    // if statement to prompt adding an Inter, Engineer, or generate the HTML based on the selection from the last question "addMember"
    if(answerInput.addMember === "Intern"){
        addIntern();
    } else if(answerInput.addMember === "Engineer"){
        addEngineer();
    } else {
        generateIndexHTML();
    }
})

function addIntern(){
    inquirer.prompt([
        // prompt intern questions
        {
            name:"internName",
            type:"input",
            message:"Enter intern's name",
        },
        {
            name:"internId",
            type:"input",
            message:"Enter intern's employee Id",
        },
        {
            name:"internEmail",
            type:"input",
            message:"Enter intern's email",
        },
        {
            name:"internSchool",
            type:"input",
            message:"Enter intern's school",
        },
        {
            name:"addMember",
            type:"list",
            message:"Add team member?",
            choices:["Engineer", "Intern", "No"]
        },
    ])

    .then(answerInput => {
        // create intern
        let intern = new Intern(answerInput.internName, answerInput.internId, answerInput.internEmail, answerInput.internSchool);
        // add to member array
        membersInput.push(intern);
        if(answerInput.addMember === "Intern"){
            addIntern();
        } else if(answerInput.addMember === "Engineer"){
            addEngineer();
        } else {
            generateIndexHTML();
        }
    });
}

function addEngineer(){
    inquirer.prompt([
        // prompt engineer questions
        {
            name:"engineerName",
            type:"input",
            message:"Enter engineer's name",
        },
        {
            name:"engineerId",
            type:"input",
            message:"Enter engineer's employee Id",
        },
        {
            name:"engineerEmail",
            type:"input",
            message:"Enter engineer's email",
        },
        {
            name:"engineerGithub",
            type:"input",
            message:"Enter engineer's github",
        },
        {
            name:"addMember",
            type:"list",
            message:"Add team member?",
            choices:["Engineer", "Intern", "No"]
        },
    ])

    .then(answerInput => {
        // create engineer
        let engineer = new Engineer(answerInput.engineerName, answerInput.engineerId, answerInput.engineerEmail, answerInput.engineerGithub);
        // add to member array
        membersInput.push(engineer);
        if(answerInput.addMember === "Intern"){
            addIntern();
        } else if(answerInput.addMember === "Engineer"){
            addEngineer();
        } else {
            generateIndexHTML();
        }
    });
}


// Need beginning of html to remain consistant 
function beginIndex(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>        
        <title>Team</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
            <div class="navbar-brand mb-0 h1">
                <h1>Team Profile</h1>
            </div>
        </nav>
        <div class="container">
            <div class="row">`;

            
}
// passing in the members from the memberInput array to html employee "cards"
function managerInputHTML(membersInput){
    return `            <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
          Employee: ${membersInput.getName()}
          <br>
          <br>
          Manager
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${membersInput.getId()}  </li>
      <li class="list-group-item">Email:${membersInput.getEmail()} </li>
      <li class="list-group-item">Office Number:${membersInput.getOfficeNumber()} </li>

    </ul>
  </div>`;

}

function engineerInputHTML(membersInput){
    return `            <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
          Employee: ${membersInput.getName()}
          <br>
          <br>
          Engineer
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${membersInput.getId()}  </li>
      <li class="list-group-item">Email:${membersInput.getEmail()} </li>
      <li class="list-group-item">Github:${membersInput.getGithub()} </li>
    </ul>
  </div>`;

}

function internInputHTML(membersInput){
    return `            <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
          Employee: ${membersInput.getName()}
          <br>
          <br>
          Intern
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${membersInput.getId()}  </li>
      <li class="list-group-item">Email:${membersInput.getEmail()} </li>
      <li class="list-group-item">School:${membersInput.getSchool()} </li>
    </ul>
  </div>`;

}

function endingHTML(){
    return `</div>
    
    </body>
    </html>`;
}

function generateIndexHTML(){
    fs.writeFileSync(htmlFilePath,"");
    let indexHTML = beginIndex();
    for (var i in membersInput){
        var role = membersInput[i].getRole();
        if (role === 'Manager') {
            indexHTML += managerInputHTML(membersInput[i]);
        } else if (role === 'Engineer') {
            indexHTML += engineerInputHTML(membersInput[i]);
        } else if (role === 'Intern') {
            indexHTML += internInputHTML(membersInput[i]);
        }
    }

    indexHTML += endingHTML();
    fs.writeFileSync(htmlFilePath, indexHTML);
        


};


