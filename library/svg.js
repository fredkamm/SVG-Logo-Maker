const {
  Circle,
  Triangle,
  Square,
  Ellipse,
  Star,
  Diamond,
} = require("./shapes");

class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  
  // call "render" method to generate SVG markup
  render() {
    return `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }

  setShape(shape) {
    // Call "render" method on the shape object and store the result in the shape property
    this.shape = shape.render();
  }

  setText(text, textColor, shape, fontStyle) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

    // Initialize text position and size based on shape
    let textX = 0;
    let textY = 0;
    let textSize = 60;

    // Calculate text position based on shape
    switch (shape.constructor) {
      case Circle:
        textX = 80;
        textY = 100;
        break;

      case Triangle:
        textX = 100;
        textY = 190;
        break;

      case Square:
        textX = 125;
        textY = 150;
        break;

      case Ellipse:
        textX = 200;
        textY = 100;
        break;

      case Star:
        textX = 100;
        textY = 113;
        textSize = 45;
        break;

      case Diamond:
        textX = 100;
        textY = 113;
        textSize = 45;
        break;
    }

    // Set the text content and style
    this.text = `<text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" fill="${textColor}" style="font-family: ${fontStyle}, sans-serif">${text}</text>`;
  }
}

module.exports = SVG;
