const { Circle, Triangle, Square, Ellipse, Star } = require("./shapes");


class SVG {
    constructor() {
      this.text = "";
      this.shape = "";
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
  
    setText(text, textColor, shape) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
  
      let textX = 0;
      let textY = 0;
      let textSize = 60;
  
      // Calculate text position based on shape
      switch (shape.constructor) {
        case Circle:
          textX = 50;
          textY = 80;
          break;
        case Triangle:
          textX = 200;
          textY = 150;
          break;
        case Square:
          textX = 125;
          textY = 150;
          break;
        case Ellipse:
          textX = 200;
          textY = 105;
          break;
        case Star:
          textX = 100;
          textY = 120;
          break;
        default:
          throw new Error("Invalid shape.");
      }
  
      this.text = `<text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  
    setShape(shape) {
      this.shape = shape.render();
    }
  }

  module.exports = SVG;