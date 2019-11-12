# Basic sample

Let's check how easy is to integrate jsx in your bundle.

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We start from _01 es6_. Just copy the project and execute _npm install_

```bash
npm install
```

- Let's install _react_ and _react-dom_

```bash
npm install react react-dom --save
```

- Let's create a component called **HelloComponent** in the [_hello.jsx_](src/hello.jsx) file (./src/hello.jsx)

_./src/hello.jsx_

```javascript
import React from 'react';

export const HelloComponent = () => <h2>Hello from React</h2>
```

- Now let's create in the [_index.html_](src/index.html) file (./src/index.html) a div container to instantiate our react application. Let's move as well the script tag to the bottom of the body (to ensure the div root will be avaible when the script executes).

_./src/index.html_

```diff
<html>
<body>
  <h1>Check the console log</h1>
+  <div id="root">
+  </div>
   <script src="./index.js"></script>
</body>
</html>
```

- Let's create the entry point in the [_index.js_](src/index.js) file (./src/index.js)

_./src/index.js_

```diff
+   import React from 'react';
+   import ReactDOM from 'react-dom';
+   import { HelloComponent } from './hello.jsx';

+   ReactDOM.render(
+     <HelloComponent />,
+     document.getElementById('root')
+   );

- const sampleNumber = 1;
- console.log(`Hello from sample ${sampleNumber}`);
```

- Let's run the sample.

```bash
npm start
```

