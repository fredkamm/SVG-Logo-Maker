class Shapes {
  constructor() {
    this.shapeColor = "";
  }
  setColor(color) {
    this.shapeColor = color;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="80" cy="80" r="70" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="100 30, 200 200, 0 200" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}

class Ellipse extends Shapes {
  render() {
    return `<ellipse cx="200" cy="80" rx="100" ry="50" fill="${this.shapeColor}" />`;
  }
}

class Star extends Shapes {
  render() {
    return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square, Ellipse, Star };