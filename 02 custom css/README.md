# Custom CSS

Let's start working with styles.

In this demo we create a custom CSS file which contains a simple css class to set the background color to red.

We start from sample _01 es6_.

Summary steps:
 - Create a custom css file.
 - Use it in our main page.

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We start from _01 es6_. Just copy the project and execute _npm install_

```cmd
npm install
```

- Let's create the file _mystyles.css_

_./src/mystyles.css_

```
.red-background {
 background-color: indianred;
}
```

- We import the css to our index.js file:

__./src/index.js_

```diff
+ import './mystyles.css';

const sampleNumber = 1;
```

- And now we can just use this style directly in our HTML file (so far so good, if we run this project now we won't see this style applied, because first we have to go through some webpack configuration). Let's update `index.html`.

```diff
<html>
<body>
  <h1>Check the console log</h1>
+ <div class="red-background">
+  RedBackground stuff
+ </div>  
  <script src="./index.js"></script>
</body>
</html>
```
Once we modified the html file, let's start the project
```cmd
npm start
```

We see we get an error
```cmd

> basic@1.0.0 start C:\repos\parcel-by-sample\01 es6
> rimraf dist && parcel ./src/index.html --open

'rimraf' is not recognized as an internal or external command,
operable program or batch file.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! basic@1.0.0 start: `rimraf dist && parcel ./src/index.html --open`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the basic@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\maxim_21nujjd\AppData\Roaming\npm-cache\_logs\2018-04-11T04_02_23_917Z-debug.log
```
That error is because we don't have installed the rimraf package. Let's install it
```cmd
npm install rimraf --save-dev
```
Now let's back to start the project
```cmd
npm start
```
We see now the project builds correctly
```cmd

> basic@1.0.0 start C:\repos\parcel-by-sample\01 es6
> rimraf dist && parcel ./src/index.html --open

Server running at http://localhost:1234
√  Built in 6.03s.
```
Finally, we could check the built files. For example, in the html built file, we see that Parcel has added the css dependency:

```diff
<html>
+<link rel="stylesheet" href="/src.fec37933.css"><body>
  
  <h1>Check the console log</h1>
    <div class="red-background">
      RedBackground stuff
    </div> 
    <script src="/src.fec37933.js"></script>
</body>
</html>
```
