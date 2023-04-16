# SVG Logo Maker

Command line tool to generate an svg logo and write it to file.

## Usage

- Requires Node v12+. (This app has only been tested on Node 16)
- Run `npm install` to download dependencies.
- Run `node index.js` to start the app.
  - Answer questions to generate a logo.
  - Logo will be written to `logo.svg` in the working directory.
- Run tests with `npm run test`

## Generated Logo Example

<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><ellipse cx="200" cy="80" rx="100" ry="50" stroke="blue" stroke-width="2px" fill="Yellow" /><text x="200" y="100" font-size="60" text-anchor="middle" fill="Blue" style="font-family: Cursive, sans-serif">FRK</text></svg>
