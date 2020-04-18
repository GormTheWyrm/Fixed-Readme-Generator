
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
//needed for promisify?
const util = require("util");
//dotenv suggested at beginning of course
//solution uses path, check what that is

const url = "https://api.github.com/";
let gitUser = "GormTheWyrm";
axios
.get("https://api.github.com/users/GormTheWyrm")
.then(function(res) {
  console.log(res.data);
  console.log(res.data.avatar_url);
});
//do I need to "catch" this? seem to be getting 404 error
//https://developer.github.com/v3/  github documentation
//https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow
//__ github authorization... I dont know how to do this...
//api query paramters are discontinued... but it shouldnt be until november 2020 so what...?
//'https://api.github.com/user/repos'



/*
notes from review
fs.writeFileSync(...)   google this! writefile has option to use callback function as a 3rd paramter
...what is process.cwd() ?
they return axios call...
not required to use "env" stuff... it allows encryptions stuff via .env files... process.env.
........................................................keep .env file within gitingore file!
...CLIENT_ID=
...CLIENT_SECRET=
what is axios header?
require("dotenv").config();   to pass in dotenv library
...? maybe i can pass in a badge afterwards and still technically meet the project requirements...
...[link](object linked to , use #name for headers!)
shield.io get badges for github!!! (main site for it)
  try to get badge at top!
  NEED GITHUB PHOTO!
...may need to create app vie github... 
demo section?

GIF; 

my last update;
changed readme file  name to README



PRIORITIES
1. get api working and pull picture and email...
    try to put this under contact info
2. get at least one badge to appear at top of readme
3. make markdown pretty
4. start using markdown for regular notes!

*/