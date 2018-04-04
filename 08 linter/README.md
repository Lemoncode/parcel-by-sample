# Linting

Parcel by default doesn't offer an integration with eslint or tsline you have to do it
via plugins.

There is a plugin available but is at _experimental stage_ we will check how to use it, 
but at the time of this writing is not recommeded to use this outside of a lab enviroment.

https://github.com/BoltDoggy/parcel-plugin-eslint

# Steps to build it

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps

- We will start from _01 es6_, just copy the project and execute _npm install_

```cmd
npm install
```

- [ESLint](http://eslint.org/) is the newest tool for _linting_ that goes to the next level and it allows us to use custom rules, parsers, plugins, etc.
Let's start by downloading the `eslint` library via `npm`:

```
npm install eslint --save-dev
```

- ESLint works with Babel and JSX syntax by installing plugins. That is, it's a great library to develop React projects. This sample is a demo, so we're going to implement just a basic configuration.
We are going to create a file `.eslintrc.json` (there are many [file formats options](http://eslint.org/docs/user-guide/configuring#configuration-file-formats))

_./.eslintrc.json_
```json
{
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  }
}
```
- **Note that `eslint:recommended` must not include spaces after the colon (:) character.**
- This is the most basic configuration, where we are using [defaults rules](http://eslint.org/docs/rules/) provided by ESLint and we are defining [browser and node environments](http://eslint.org/docs/user-guide/configuring#specifying-environments) to define `browser` related global variables like *window* object, and `node` related global variables like *require* or *__dirname*.

- Let's install the parcel linter plugin.

```bash
npm install parcel-plugin-eslint --save-dev
```

- Let's start the sample and check

```bash
npm run build
```

If you got to the _problems_ tab in Visual Studio code you will get the linter errors.
