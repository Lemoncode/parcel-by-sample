# Basic sample

It's time to test how parcel behaves when using ES6. Does it transpile it to ES5?

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We will start from _00 basic_, just copy the project and execute _npm install_

```cmd
npm install
```

- Now let's update our sample and use some cool ES6 feature.

_./src/index.js_

```javascript
const sampleNumber = 1;
console.log(`Hello from sample ${sampleNumber}`);
```

- Now it's time to run a build and check if we got the code already transpiled

```bash
npm run build
```


- And we got it

_./dist/src.XXXXX.js

```javascript
})({2:[function(require,module,exports) {
var sampleNumber = 1;
console.log("Hello from sample " + sampleNumber);
},{}],3:[function(require,module,exports) {
```