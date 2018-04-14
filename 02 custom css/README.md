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
Once we modified the html file, let's start the project
```cmd
npm start
```

We will see we get an error
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
We will see now the project is built correctly
```cmd

> basic@1.0.0 start C:\repos\parcel-by-sample\01 es6
> rimraf dist && parcel ./src/index.html --open

Server running at http://localhost:1234
√  Built in 6.03s.
```
Finally, we could check the built files, like html file, we will see parcel added the css dependency in the built file
```diff
<html>
+<link rel="stylesheet" href="/src.fec37933.css"><body>
  <script src="/src.fec37933.js"></script>
  <h1>Check the console log</h1>
    <div class="red-background">
      RedBackground stuff
    </div> 
</body>
</html>
```