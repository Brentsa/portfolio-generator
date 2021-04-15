const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(userName, github); 

// fs.writeFile("index.html", pageHTML, err => {
//   if(err) throw err;

//   console.log("The file was created successfully! Check index.html for the site");
// });


function promptUser()
{
  inquirer.prompt([
    {
      type: "input", 
      name: "name",
      message: "What is your name?" 
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
    }
  ])
  .then(answer => console.log(answer));
}

promptUser();