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
    message: "What color do you want the text to be?",
  },
  {
    name: "shapeType",
    type: "list",
    message: "What shape do you want to use?",
    choices: ["circle", "square", "triangle", "ellipse", "star"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "What color do you want the shape to be?",
  },
  {
    name: "hasBorderColor",
    type: "list",
    message: "Do you want to add a border color?",
    choices: ["yes", "no"],
  },
  {
    name: "borderColor",
    type: "input",
    message: "What color do you want the border to be?",
    when: (answers) => answers.hasBorderColor === "yes",
  },
  {
    name: "borderThickness",
    type: "input",
    message: "How thick do you want the border to be?",
    default: "1px",
    validate: (borderThickness) =>
      borderThickness.includes("px") ||
      "The border thickness must be in pixels (ex: 1px)",
    when: (answers) => answers.hasBorderColor === "yes",
  },
];

// calls the prompt on run()
class CLI {
  run() {
    return (
      inquirer
        .prompt(questions)
        // passing down the user response and creating a new shape based on users response
        .then(
          ({
            text,
            textColor,
            shapeType,
            shapeColor,
            hasBorderColor,
            borderColor,
            borderThickness,
          }) => {
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

            // Set border color and thickness if user selected yes for border color
            if (hasBorderColor === "yes") {
              shape.setBorderColor(borderColor);
              shape.setBorderThickness(borderThickness);
            }

            const svg = new SVG();
            svg.setShape(shape);
            svg.setText(text, textColor, shape);
            return writeFile("./assets/logo.svg", svg.render());
          }
        )
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
