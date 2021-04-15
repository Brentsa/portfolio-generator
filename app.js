const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(userName, github); 

// fs.writeFile("index.html", pageHTML, err => {
//   if(err) throw err;

//   console.log("The file was created successfully! Check index.html for the site");
// });


const promptUser = () =>
{
  return inquirer.prompt([
    {
      type: "input", 
      name: "name",
      message: "What is your name?" 
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
    },
    {
      type: "input",
      name: "about",
      message: "Enter a description about yourself."
    }
  ]);
}

const promptProject = portfolioData =>
{
  if(!portfolioData.projects) 
    portfolioData.projects = [];

  console.log(`
  =================
  Add a New Project
  =================
  `);

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Enter a project description."
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What languages did you build this project with? (Check all that apply.)",
      choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
    },
    {
      type: "input",
      name: "link",
      message: "Enter a GitHub link to your project. (Required)"
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to add another project?",
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    
    if(projectData.confirmAddProject)
      return promptProject(portfolioData);
    else
      return portfolioData;
  });
}

promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
}); 
