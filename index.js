const inquirer = require("inquirer");
const fs = require("fs");
//const questions = [];
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
    ]).then((data) => {
        console.log(data);
        let ReadMe = generateMarkdown(data);
        fs.writeFileSync('SampleREADME.md', ReadMe, "utf-8");
        err => {
            if (err) throw err;
            console.log("Generated ReadMe");
        };
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
    
#Title
#${data.Title}



#description
#${data.description}


#toc
#${data.toc}


#install
\`\`\` 
${data.install}
\`\`\`  

#license
#${data.license}


#email
[${data.email}](mailto:${data.email})



#contributor
#${data.contributor}


#test
#${data.test}



#random
#${data.random}

`;
}

module.exports = generateMarkdown;