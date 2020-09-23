var inquirer = require("inquirer");
var fs = require("inquirer");
const questions = [
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
            name: "table of contents"
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
            message: "Anything Else?",
            name: "random"
        }
    ])
    .then(function(response) {
        console.log(response)
        if (response.confirm === response.password) {
            console.log("Success!");
        } else {
            console.log("You forgot your password already?!");
        }
    }),

]