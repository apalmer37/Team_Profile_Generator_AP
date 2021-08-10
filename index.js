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

// array of objects for team members
const membersInput = [];


inquirer.prompt([
    // first questions
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
    // create mananer
    let manager = new Manager(answerInput.name, answerInput.id, answerInput.email, answerInput.officeNum);
    membersInput.push(manager);
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

function generateIndexHTML(){
    fs.writeFileSync(htmlFilePath,"");
};