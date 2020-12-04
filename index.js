//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//question
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    },
    {
        type: "input",
        message: "Provide a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Does your app have any dependencies? If so, please list.",
        name: "dependency",
        default: "none"
    },
    {
        type: "input",
        message: "How do you use your app?",
        name:"instructions",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    },
    {
        type: "input",
        message: "Did anyone contribute to your app?",
        name: "contributors",
        default: "none"
    },
    {
        type: "list",
        message: "Choose your license",
        name: "license",
        choices: ["MIT", "Apache", "General Public License", "Eclipse Public License", "Boost Software License", "none"],
        default: "MIT License"
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "githubName",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    },
    {
        type: "input",
        message: "Email:",
        name: "userEmail",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    }

]).then(({
    title,
    dependency,
    description,
    instructions,
    contributors,
    license,
    githubName,
    userEmail
})=>{
    //template
    const template = `# ${title}
* [Description](#-description)
* [Installation](#-dependency)
* [Instructions](#-instructions)
* [Contributors](#-contributors)
* [License](#-license)
* [Contact](#-contact)
# Description
    ${description}
# Installation
    ${dependency}
# Contributors
    ${contributors}
# Instructions
    ${instructions}
# License
    ${license}
    
# Contact
* Github :${githubName}
* E-mail :${userEmail}`;
    //function to create readme
    createNewFile(title,template);
}
);
//creating function 
function createNewFile(filename,data){
    fs.writeFile(`./${filename.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("readme complete!");
    })
}