# Basic sample

It's time to test how parcel behaves when using Typescript.

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We will start from _02 es6_, just copy the project and execute _npm install_

```cmd
npm install
```

- Let's install _tyescript_

```cmd
npm install typescript --save-dev
```

- Let's configure the _tsconfig.json_ file.

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

- let's update our _index.ts_ to use some typescript feature.

```diff
- const sampleNumber = 1;
+ let sampleNumber : number = null;
+ sampleNumber = 6;
console.log(`Hello from sample ${sampleNumber}`);
```

- Let's update our index.html to target to index.ts

_index.html_

```diff
<html>
<body>
-  <script src="./index.js"></script>
+  <script src="./index.ts"></script>
  <h1>Check the console log</h1>
</body>
</html>
```

- Let's run the sample and check that we got it working:

```
npm start
```

> Before running parcel we could install _typescript_ if not parcel we will install it for us

- If we check the dist folder we can find the transpiled code, if we change now the type of _sampleNumber_ to _string_
and we won't get a transpile error, that's a known bug:

https://github.com/parcel-bundler/parcel/issues/465

- We need to intall a plugin to fix this.

```cmd
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