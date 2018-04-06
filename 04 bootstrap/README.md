# Import bootstrap

In this demo we will install and configure parcel to import the well known
[Bootstrap](https://getbootstrap.com/) CSS library.

We will start from sample _03 SASS_.

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We will start from _03 SASS_, just copy the project and execute _npm install_

```cmd
npm install
```

- Let's install bootstrap

```bash
npm install bootstrap --save
```

- Let's update our html including a link to bootstrap.

```diff
<html>

<body>
+  <link rel="stylesheet" 
+     href="../node_modules/bootstrap/dist/css/bootstrap.css">
  <script src="./index.js"></script>  
```

- Let's modify our _index.html_ and include some specific bootstrap component.

```diff
<html>
<body>
  <script src="./index.js"></script>
  <h1>Check the console log</h1>
+    <div class="jumbotron">
+      <h1>Testing Bootstrap</h1>
+      <p>
+        Bootstrap is the most popular ...
+      </p>
+    </div>    
  <div class="red-background">
      RedBackground stuff
  </div>  
</body>
</html>
```

- Let's start the project and check that we got bootstrap styles.

```
npm start
```