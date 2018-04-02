# Custom CSS

Let's get started working with styles.

In this demo will create a custom CSS file (it will contain a simple css class
that will setup a background color to red).

We will start from sample _01 es6_.

Summary steps:
 - Create a custom css file.
 - Use it in our main page.


# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We will start from _01 es6_, just copy the project and execute _npm install_

```cmd
npm install
```

- Let's create a file that we will call _mystyles.css_

_./src/mystyles.css_

```
.red-background {
 background-color: indianred;
}
```

- We can just import the css in our index.js file:

__./src/index.js_

```diff
+ import './mystyles.css';

const sampleNumber = 1;
```

- And now we can just use this style directly in our HTML file (so far so good, if we run this project now we won't see this styles applied, we have to go through some webpack configuration), let's update `index.html`.

```diff
<html>
<body>
  <script src="./index.js"></script>
  <h1>Check the console log</h1>
+ <div class="red-background">
+  RedBackground stuff
+ </div>  
</body>
</html>
```