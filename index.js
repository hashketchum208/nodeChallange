// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs').promises;
// const generateMarkdown = require('./utils/generateMarkdown');
  
  // TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your title name?"
    },
    {
      type: "input",
      name: "description",
      message: "Give a description of your app"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation steps to your app?"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the primary user story for your app?"
    },
    {
      type: "input",
      name: "credits",
      message: "Give credit when its due, list apps and developers who helped"
    },
    {
      type: "list",
      name: "license",
      message: "Add a license",
      choices: ['MIT', 'Apache', 'Idaho state drivers licence']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Include any guidelines explaining how other developers can contribute to your application:'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide examples of how to run any tests for your application:'
  },
  {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail address?',
  }
]);
    
};
//  TODO: Create a function to write README file

const generateREADMEmd = ({ title, description, installation, usage, credits, license, contribution, test, username, email }) =>
   `
  # ${title},

  ## Description
  ${description},

  ## Installation
  ${installation},

  ## Usage
  ${usage},

  ## Credits
  ${credits},

  ## License
  ${license},

  ## Contribution
  ${contribution},

  ## test
  ${test},

  ## username
  ${username},

  ## email
  ${email},
  `;


// TODO: Create a function to initialize app

const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateREADMEmd(answers)))
    .then(() => console.log('Successfully wrote to READMEmd'))
    .catch((err) => console.error(err));
  };
// Function call to initialize app
init();