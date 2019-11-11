# Basic sample

It's time to test how parcel behaves when using Typescript.

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We start from _01 es6_. Just copy the project and execute _npm install_

```bash
npm install
```

- Let's install _tyescript_

```bash
npm install typescript --save-dev
```

- Let's add and configure the _tsconfig.json_ file.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
```

- Let's rename _index.js_ to _index.ts_

- let's update our _index.ts_ to use some TypeScript features.

_./src/index.ts_

```diff
- const sampleNumber = 1;
+ let sampleNumber : number = null;
+ sampleNumber = 6;
console.log(`Hello from sample ${sampleNumber}`);
```

- Let's update our index.html to use index.ts instead of index.js

_./src/index.html_

```diff
<html>
<body>
  <h1>Check the console log</h1>
- <script src="./index.js"></script>
+ <script src="./index.ts"></script>
</body>
</html>
```

- Let's run the sample and check that we got it working:

```bash
npm start
```

> Before running parcel we could install _typescript_. However, Parcel will install it for us if it is not already installed.

- If we check the dist folder we can find the transpiled code.

```
...
})({"index.ts":[function(require,module,exports) {
var sampleNumber = null;
sampleNumber = 6;
console.log("Hello from sample ".concat(sampleNumber));
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
...
```

- If we now change the type of _sampleNumber_ to _string_
and we don't get a build error, it's because of a known bug:

https://github.com/parcel-bundler/parcel/issues/465

- We need to install a plugin to fix this.

> Known bug: parcel-plugin-typescript does not support parcel@1.10 you will have to downgrade to 
1.9.4 to see it working, issue: https://github.com/fathyb/parcel-plugin-typescript/issues/59 and this open request: https://github.com/parcel-bundler/parcel/issues/1378

> Note down this plugin is buggy and abandoned and doesn't work with 

```bash
npm install parcel-plugin-typescript --save-dev
```

- In _tsconfig.json_ add the following entry:

```diff
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
+  "parcelTsPluginOptions": {
+    // If true type-checking is disabled
+    "transpileOnly": false
+  },  
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
```

- Unfortunately if we run the sample we can see that the plugin
is throwing the wrong error:

```bash
npm start
```

> The parcel team is working on enhancing Typescript support on version 2.0