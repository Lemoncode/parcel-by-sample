# CSS Module

Let's check how easy is to integrate css modules in your bundle.

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We start from _07 react_. Just copy the project and execute _npm install_

```bash
npm install
```

- Let's install _@babel/core_ and _@babel/preset-react_

```bash
npm install @babel/core @babel/preset-react  --save-dev
```

- Now let's add babel configuration file

_./.babelrc_

```javascript
  {
    "presets": [
      "@babel/preset-react"
    ]
  }
  ```

- Let's install _postcss-modules_

```bash
npm install postcss-modules --save-dev
```
- Let's add postcssrc file

_./.postcssrc_

```javascript
{
  "modules": true
}
```


- Now, let's create a styles file [_mystyles.scss_] (src/mystyles.scss) 

_src/mystyles.scss_

```css
$blue-color: teal;

.hello {
  background-color: $blue-color;
}
```

- Now let's modify the  component called **HelloComponent** in the [_hello.jsx_] file. Let's import scss file and use the css module

```javascript
import React from "react";
const classes = require("./mystyles.scss");

export const HelloComponent = () => {
    return (
        <div className={classes.hello}>
            <h2>Hello from React</h2>
        </div>
    )
};
```

- Let's run the sample.

```bash
npm start
```

