const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = ("generateMarkdown");
const questions = [];
inquirer
    .prompt([{
            type: "input",
            message: "Title?",
            name: "Title"
        },
        {
            type: "input",
            message: "Description?",
            name: "description"
        },
        {
            type: "input",
            message: "Table Of Contents",
            name: "toc"
        },
        {
            type: "input",
            message: "Installation?",
            name: "install"
        },
        {
            type: "checkbox",
            message: "License?",
            choices: ['Apache',
                'MIT',
                'GNU',
                'APM',
                'GitHub',
                'CPAN',
                'ISC'

            ],
            name: "license"
        },
        {
            type: "input",
            message: "GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "Email?",
            name: "email"
        },
        {
            type: "input",
            message: "Contributor",
            name: "contributor"
        },
        {
            type: "input",
            message: "Test?",
            name: "test"
        },
        {
            type: "input",
            message: "Anything Else?",
            name: "random"
        }
    ])
    .then(() => {
        var ReadMe = generateMarkdown(questions);
        fs.writeFile("generator.md", ReadMe, err => {
            if (err) throw err;
            console.log("Generated ReadMe");
        });
    });

// function to initialize program
function writeToFile(fileName, data) {}
// function to initialize program
function init() {

}

// function call to initialize program
init();