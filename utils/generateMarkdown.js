// function to generate markdown for README
function generateMarkdown() {
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