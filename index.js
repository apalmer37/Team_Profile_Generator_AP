// import Employee classes
import { Engineer } from './lib/engineer.js';
import { Intern } from "./lib/intern.js";
import { Manager } from "./lib/manager.js";

// import inquirer
import inquirer from "inquirer";

// import fs to generate HTML
import * as fs from 'fs';
// create html file path
const htmlFilePath = './htmlOutput/index.html'

// array of objects for team members
const membersInput = [];


inquirer.prompt([
    // first questions
    {
        name:"managerName",
        type:"input",
        message:"Enter manager's name",
    },
    {
        name:"managerId",
        type:"input",
        message:"Enter manager's employee Id",
    },
    {
        name:"managerEmail",
        type:"input",
        message:"Enter manager's email",
    },
    {
        name:"managerOfficeNum",
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

.then (function answerInput() {
    // create mananer
    let manager = new Manager(answerInput.managerName, answerInput.managerId, answerInput.managerEmail, answerInput.managerOfficeNum);
    membersInput.push(manager);
    if(answerInput.addMember === "Intern"){
        addIntern();
    } else if(answerInput.addMember === "Engineer"){
        addEngineer();
    } else {
        generateHTML();
    }
})

function addIntern(){
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
        membersInput.push(engineer);
        if(answerInput.addMember === "Intern"){
            addIntern();
        } else if(answers.addMember === "Engineer"){
            addEngineer();
        } else {
            generateHTML();

        }
    });
}

function generateHTML(){
    fs.writeFileSync(htmlFilePath,"htmlOutput/index.html");
};