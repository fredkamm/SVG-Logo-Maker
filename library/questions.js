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
    name: "fontStyle",
    type: "list",
    message: "What font style do you want to use?",
    choices: [
      "Arial",
      "Comic Sans MS",
      "Courier New",
      "Cursive",
      "Fantasy",
      "Georgia",
      "Impact",
      "Monospace",
      "Palatino",
      "Sans-serif",
      "Serif",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
    ],
  },
  {
    name: "textColor",
    type: "input",
    message: "What color do you want the text to be?",
    validate: (input) =>
      input === "" ? "Please enter a color for the text." : true,
  },
  {
    name: "shapeType",
    type: "list",
    message: "What shape do you want to use?",
    choices: ["circle", "square", "triangle", "ellipse", "star", "diamond"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "What color do you want the shape to be?",
    validate: (input) =>
      input === "" ? "Please enter a color for the text." : true,
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
    default: "black",
    when: (input) => input.hasBorderColor === "yes",
  },
  {
    name: "borderThickness",
    type: "input",
    message: "How thick do you want the border to be?",
    default: "1px",
    validate: (borderThickness) =>
      borderThickness.includes("px") ||
      "The border thickness must be in pixels (ex: 1px)",
    when: (input) => input.hasBorderColor === "yes",
  },
];

module.exports = questions;
