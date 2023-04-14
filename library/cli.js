const inquirer = require("inquirer");

// Questions to pass into the prompt
const questions = [
  {
    name: "text",
    type: "input",
    message:
      "Enter text for the logo. (Must not be more than 3 characters.)",
    validate: (text) =>
      text.length <= 3 ||
      "The message must not contain more than 3 characters",
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter a text color",
  },
  {
    name: "shapeType",
    type: "list",
    message: "Select a shape for the logo",
    choices: ["circle", "square", "triangle"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Enter a shape color",
  },
]

// calls the prompt on run()
class CLI {
  run() {
    return inquirer
      .prompt(questions)
      .then((response) => {
        console.log(response);
      })
  }
}

module.exports = CLI;
