// function to generate markdown for README
function generateMarkdown() {
    return '\n\n#' + data.title + '\n\n##Title\n\n#' + data.description + '\n\n#description\n\n#' + data.toc + '\n\n#toc\n\n#' + data.install + '\n\n#install\n\n#' + data.license + '\n\n#license\n\n#' + data.email + '\n\n#email\n\n#' + data.contributor + '\n\n#contributor\n\n#' + data.test + '\n\n#test\n\n\n#' + data.random + '\n\n#random\n\n';
}

module.exports = generateMarkdown;