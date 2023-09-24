const inquirer = require('inquirer');
const fs = require("fs");
const { Circle, Square, Triangle} = require("./lib/shapes.js");

inquirer.prompt([
    {
        type:'list',
        message : 'What shape do you want your logo?',
        name: 'shape',
        choices:["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        message: 'What color do you want your logo?',
        name: 'logoColor',
    },
    {
        type: 'input',
        message: 'What color do you want your text to be?',
        name: 'fontColor',
    },
    {
        type: 'input',
        message: 'Enter three characters for logo',
        name: 'logoText',
    },

])
.then ((response) => {
    let shape; 
    if (response.shape === "Circle") {
        shape = new Circle()
    }else if (response.shape === "Square") {
        shape = new Square()
    }else {
        shape =new Triangle()
    }
    
    shape.setColor (response.logoColor) 
    const template =`<svg height ="500" width="400"> ${shape.render()}
    <text x="80" y="75" font-size "200" fill ="${response.fontColor}">${response.logoText}</text></svg>` 

    
        

    fs.writeFile('./examples/logo.svg', template, (err) =>
    err ? console.error(err) : console.log ('Generated logo.svg'));
});