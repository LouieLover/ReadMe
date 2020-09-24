const questions = [
        let inquirer = require("inquirer");
        let fs = require("inquirer");
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
                    message: "Test?",
                    name: "test"
                },
                {
                    type: "input",
                    message: "Anything Else?",
                    name: "random"
                }
            ];.then(generateMarkdown(inquirer) {
                    console.log(response.data);

                    init();

                    function init() {

                    }

                    function writeToFile(fileName, data) {}