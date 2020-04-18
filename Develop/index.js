const fs = require("fs");
const inquirer = require("inquirer");
//probably dont need
const axios = require("axios");
//needed for promisify?
const util = require("util");
let emailURL = "";


//PROCESS
//program should...
//prompt questions
//write questions to readme.md
//magick a fucking badge
//...
//   ...
//      ...
//do I need to do badge things before writing anyhting else?
//this should not be as async as it can... write? we want it to go in order and not haphazardly..





function init() {

    console.log("Welcome to the Readme Generator App. Please answer the following questions.");

    inquirer.prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Github Email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },

        {
            type: "input",
            message: "Input a user story. Example; As a developer, I want an app to walk me through creating a readme.",
            name: "userStory"
        },

        {
            type: "input",
            message: "Write a short description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What programs is your project dependent on?",
            name: "Dependencies"
        },

        {
            type: "input",
            message: "What steps must be taken to install your program?",
            name: "installation"

        },
        {
            type: "input",
            message: "What steps should a user follow to use your program?",
            name: "usage"
        },
        {
            type: "input",
            message: "What steps should a user follow to test your program?",
            name: "test"
            //BREAK THIS INTO STEPS TOO!
            //should explain what is tested, and why...
        },
        {
            type: "input",
            message: "What license do you operate under?",
            name: "license"
        },
        {
            type: "input",
            message: "Who are the primary authors of the project",
            name: "authors"
        },
        {
            type: "input",
            message: "list the major contributors, preferably by github username:",
            name: "contributors"
        },
        {
            type: "input",
            message: "How could those who want to help contribute?",
            name: "wantToHelp"
        },
        {
            type: "confirm",
            message: "Display Github info under contacts?",
            name: "confirmGit",
            default: true
        },

    ])
        .then(function (response) {
            // console.log(response.username);

            //call api and get info
            const url = "https://api.github.com/";
            let gitUser = response.username;
            //letting user pass in username to prompt!
            axios
                .get(`https://api.github.com/users/${gitUser}`)
                .then(function (apiRes) {
                    // console.log(apiRes.data);
                    emailURL = apiRes.data.avatar_url;
                    // console.log(emailURL);

                    if (response.confirmGit === true) {
                        fs.appendFile("README.md",
                            //what is written to end of readme (under contact)
                            `
${gitUser} <br>
\![Github Profile Picture](${apiRes.data.avatar_url}.PNG "Github Profile Picture") <br>
email: \<${response.email}\>  
`
                            //error handling function (required)
                            , function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                            });
                    } //end appending function

                });

            //do the writing here        
            fs.writeFile("README.md",
                //this needs to be aligned left for formatting reasons
                `
# Title: ${response.title} ![badge](https://img.shields.io/badge/maintained-no!%20(as%20of%202018)-red.PNG "obligatory badge")<br>
${response.description}<br>
## User Story
${response.userStory}<br>
## Table of Contents:
Title <br>
User Story <br>
Table of Contents <br>
Dependencies <br>
Setup Instructions and Installation Guide <br>
Instructions for Use <br>
Testing <br>
Licensing <br>
Contributors <br>
<br>
## Dependencies <br>
${response.Dependencies}<br>
## Installation Guide: 
${response.installation}<br>
## Instructions for Use:<br>
${response.usage}<br>
## Testing:<br>
${response.test}<br>
## License: 
${response.license}<br>
## Contributors: <br>
Main Authors: ${response.authors} <br>
Other Contributions: ${response.contributors} <br>
<br>
## How to Help:<br>
${response.wantToHelp}<br>
## Questions and Contact:<br>
${emailURL} <br>
${response.email}
`

                , function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("New Readme Generated");
                }); //end of write function
            //use the first 2 responses to get badge somehow...




        });



}



// MAIN CODE ************************************************************************************** 
init();
//TO DO LIST:
//add badges
//add links to ToC in markdown
//update comment on bootcampspot
//split code between multiple files

                // title should be bold or something...
                //look up markup/markdown text .md ...
                //ToC should have links
                //shield and badges... 
                //  https://github.com/badges/shields
                //I downloaded npm ci but have not figured the rest out


//GormTheWyrm's Readme Generator