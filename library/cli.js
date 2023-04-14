const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");

// Questions to pass into the prompt
const questions = [
  {
    name: "text",
    type: "input",
    message: "Enter text for the logo. (Must not be more than 3 characters.)",
    validate: (text) =>
      text.length <= 3 || "The message must not contain more than 3 characters",
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
];

// calls the prompt on run()
class CLI {
  run() {
    return inquirer
      .prompt(questions)
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;

          case "square":
            shape = new Square();
            break;

          default:
            shape = new Triangle();
            break;
        }
        shape.setColor(shapeColor);
      });
  }
}

module.exports = CLI;
