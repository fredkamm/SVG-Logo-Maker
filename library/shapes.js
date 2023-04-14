class Shapes {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="200,10 250,190 160,210" fill="${this.color}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
