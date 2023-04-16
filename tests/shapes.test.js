const { Square, Triangle, Circle, Ellipse, Star } = require("../library/shapes");

describe("Circle", () => {
  test("should render svg for a green circle element with a black border of 2px", () => {
    const expectedSvg = '<circle cx="80" cy="80" r="70" stroke="black" stroke-width="2px" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    circle.setBorderColor("black");
    circle.setBorderThickness("2px");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="80" cy="80" r="70" stroke="black" stroke-width="2px" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    circle.setBorderColor("black");
    circle.setBorderThickness("2px");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="100 30, 200 200, 0 200" stroke="black" stroke-width="2px" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    triangle.setBorderColor("black");
    triangle.setBorderThickness("2px");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="100 30, 200 200, 0 200" stroke="black" stroke-width="2px" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    triangle.setBorderColor("black");
    triangle.setBorderThickness("2px");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="50" y="20" width="150" height="150" stroke="black" stroke-width="2px" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    square.setBorderColor("black");
    square.setBorderThickness("2px");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="50" y="20" width="150" height="150" stroke="black" stroke-width="2px" fill="red" />';
    const square = new Square();
    square.setColor("red");
    square.setBorderColor("black");
    square.setBorderThickness("2px");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Ellipse", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<ellipse cx="200" cy="80" rx="100" ry="50" stroke="black" stroke-width="2px" fill="dodgerblue" />';
    const ellipse = new Ellipse();
    ellipse.setColor("dodgerblue");
    ellipse.setBorderColor("black");
    ellipse.setBorderThickness("2px");
    const actualSvg = ellipse.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<ellipse cx="200" cy="80" rx="100" ry="50" stroke="black" stroke-width="2px" fill="red" />';
    const ellipse = new Ellipse();
    ellipse.setColor("red");
    ellipse.setBorderColor("black");
    ellipse.setBorderThickness("2px");
    const actualSvg = ellipse.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Star", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="100,10 40,198 190,78 10,78 160,198" fill="dodgerblue" />';
    const star = new Star();
    star.setColor("dodgerblue");
    const actualSvg = star.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="100,10 40,198 190,78 10,78 160,198" fill="red" />';
    const star = new Star();
    star.setColor("red");
    const actualSvg = star.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
