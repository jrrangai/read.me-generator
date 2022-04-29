// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input( Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions)
const questions = [
    {
        // name of project
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a valid project title!');
                return false;
            }
        }
    },
    {
        // Description
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a valid project description!');
                return false;
            }
        }
    },
    {
        // Installation
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter valid steps for installing your project!');
                return false;
            }
        }
    },
    {
        // Usage
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for using your project!',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter valid usage for your project!');
                return false;
            }
        }
    },
    {
        // License
        type: 'list',
        name: 'license',
        message: 'Which license have you added to your project?',
        choices: ['BSD', 'MIT', 'Apache', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Select a lcense or none!');
                return false;
            }
        }
    },
    {
        // Credits
        type: 'input',
        name: 'contributing',
        message: 'Would you like to list any collaborators alongside with their GitHub profiles, any thrid-party assets, or tutorials used?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter valid contributions!');
                return false;
            }
        }
    },
    {
        // Tests
        type: 'input',
        name: 'tests',
        message: 'Would you like to write some tests for your application, and provide code examples alongside how to run them?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter a valid test for your project!');
                return false;
            }
        }
    },
    {
        // Question1
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter a valid GitHub username!');
                return false;
            }
        }
    },
    {
        // Question2
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter a valid Email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            writeFile(generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
