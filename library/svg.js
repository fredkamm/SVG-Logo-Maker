const { Circle, Triangle, Square, Ellipse, Star } = require("./shapes");

class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  render() {
    return `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }

  setShape(shape) {
    this.shape = shape.render();
  }

  setText(text, textColor, shape, fontStyle) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

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
    }

    this.text = `<text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" fill="${textColor}" style="font-family: ${fontStyle}, sans-serif">${text}</text>`;
  }
}

module.exports = SVG;
