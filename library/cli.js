const inquirer = require("inquirer");
const { Circle, Triangle, Square, Ellipse, Star } = require("./shapes");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");

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
    choices: ["circle", "square", "triangle", "ellipse", "star"],
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
    return (
      inquirer
        .prompt(questions)
        // passing down the user response and creating a new shape based on users response
        .then(({ text, textColor, shapeType, shapeColor }) => {
          let shape;
          switch (shapeType) {
            case "circle":
              shape = new Circle();
              break;

            case "square":
              shape = new Square();
              break;

            case "ellipse":
              shape = new Ellipse();
              break;

            case "star":
              shape = new Star();
              break;

            case "triangle":
              shape = new Triangle();
              break;
          }
          shape.setColor(shapeColor);

          const svg = new SVG();
          svg.setText(text, textColor, shape);
          svg.setShape(shape);
          return writeFile("./assets/logo.svg", svg.render());
        })
        .then(() => {
          console.log("Generated logo.svg");
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }
}

module.exports = CLI;
