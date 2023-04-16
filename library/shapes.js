class Shapes {
  constructor() {
    this.shapeColor = "";
  }
  setColor(color) {
    this.shapeColor = color;
  }
  setBorderColor(borderColor) {
    this.borderColor = borderColor;
  }
  setBorderThickness(borderThickness) {
    this.borderThickness = borderThickness;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="80" cy="80" r="70" stroke="${this.borderColor}" stroke-width="${this.borderThickness}" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="100 30, 200 200, 0 200" stroke="${this.borderColor}" stroke-width="${this.borderThickness}" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" y="20" width="150" height="150" stroke="${this.borderColor}" stroke-width="${this.borderThickness}" fill="${this.shapeColor}" />`;
  }
}

class Ellipse extends Shapes {
  render() {
    return `<ellipse cx="200" cy="80" rx="100" ry="50" stroke="${this.borderColor}" stroke-width="${this.borderThickness}" fill="${this.shapeColor}" />`;
  }
}

class Star extends Shapes {
  render() {
    return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square, Ellipse, Star };
