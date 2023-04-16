const inquirer = require("inquirer");
const { Circle, Triangle, Square, Ellipse, Star, Diamond } = require("./shapes");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");
const questions = require("./questions");

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
            fontStyle,
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

              case "diamond":
                shape = new Diamond();
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
            svg.setText(text, textColor, shape, fontStyle);
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
