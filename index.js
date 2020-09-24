const inquirer = require("inquirer");
const fs = require("fs");
const questions = [];
var data = ['questions'];
return inquirer
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
        let ReadMe = generateMarkdown(questions);
        fs.writeFile('readme', ReadMe, data, err => {
            if (err) throw err;
            console.log("Generated ReadMe");
        });
    });

//function writeToFile(fileName, data) {}
// function to initialize program
function init(data) {

}

// function call to initialize program
init();
// function to generate markdown for README
function generateMarkdown(data) {
    return `

#${data.title}

##Title

#${data.description}

#description

#${data.toc}

#toc

#${data.install}

#install

#${data.license}

#license

#${data.email}

#email

#${data.contributor}

#contributor

#${data.test}

#test


#${data.random}

#random

`;
}

module.exports = generateMarkdown;