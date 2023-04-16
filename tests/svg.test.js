const SVG = require("../library/svg");
const { Square } = require("../library/shapes");

test("should render a 400 x 400 svg element", () => {
  const expectedSvg =
    '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

// An exception test checks for code that should throw an error.
test("should throw if text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  const svg = new SVG();
  expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
});

test("should append text element", () => {
  const expectedSvg =
    '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><text x="0" y="0" font-size="60" text-anchor="middle" fill="white" style="font-family: Monospace, sans-serif">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "white", "circle", "Monospace");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should set text message and color", () => {
  const expectedSvg =
    '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><text x="0" y="0" font-size="60" text-anchor="middle" fill="#333" style="font-family: Monospace, sans-serif">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333", "circle", "Monospace");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should include a shape", () => {
  const expectedSvg =
    '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" stroke="black" stroke-width="2px" fill="blue" /><text x="0" y="0" font-size="60" text-anchor="middle" fill="#333" style="font-family: Monospace, sans-serif">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333", "Square", "Monospace");
  const square = new Square();
  square.setColor("blue");
  square.setBorderColor("black");
  square.setBorderThickness("2px");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectedSvg);
});
