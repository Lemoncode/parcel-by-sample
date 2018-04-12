# Linting

Parcel by default doesn't offer an integration with eslint or tslint, you have to do it via plugins.

There is a plugin ([parcel-plugin-eslint](https://github.com/BoltDoggy/parcel-plugin-eslint)) available but is at _experimental stage_. We will check how to use it, but at the time of this writing is not recommeded to use this outside of a lab enviroment.

## Steps to build it

### Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (min v8.9) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

### Steps

- We will start from _01 es6_, just copy the project and execute `npm install`

```bash
npm install
```

- [ESLint](http://eslint.org/) is the newest tool for _linting_ that goes to the next level and it allows us to use custom rules, parsers, plugins, etc. Let's start by downloading the `eslint` library via `npm`:

```bash
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

- Let's install the Parcel linter plugin.

```bash
npm install parcel-plugin-eslint --save-dev
```

- Let's start the sample and check

```bash
npm run build
```

>If you use Visual Studio Code and you want to see the linter errors in _problems_ tab, you have to install [ESLint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- We can see the following linter error:

  _Parsing error: The keyword 'const' is reserved_.

  `const` functionality is provided by Babel to work, so it's time to connect ESLint with Babel:

```bash
npm install babel-eslint --save-dev
```

  In ./.eslintrc.json file we have to add the parser.

```diff
{
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "node": true
- }
+ },
+ "parser": "babel-eslint"
}
```

- Now, we can see that we have an ESLint error `console.log` inside index.js file. We need to configure ESLint to disable this rule.

### Defining Rules

- As we saw previously, we are using [ESLint default rules](http://eslint.org/docs/rules/), that was set up in the linter configuration file.

  ./.eslintrc.json

```json
{
  "extends": [
    "eslint:recommended"
  ],
  ...
}
```

- The good news is that we can [configure all of these rules](http://eslint.org/docs/user-guide/configuring#configuring-rules) using the following values:

  - `0` or `off` - Disable rule.
  - `1` or `warn` - Enable the rule with "warning" severity.
  - `2` or `error` - Enable the rule with "error" severity.

- So we can disable `console` rule with the following configuration:

  ./.eslintrc.json

```diff
{
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
- "parser": "babel-eslint"
+ "parser": "babel-eslint",
+ "rules": {
+   "no-console": 0
+ }
}
```

- When you save the changes, then, we can see how the error referring to the console is not shown anymore.

- Other example is the rule named [max-lines](http://eslint.org/docs/rules/max-lines). This rule _enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity_. For demo purposes we're going to configure it with a ridiculously low number of lines, that is, just one, so we can see the error.

  ./.eslintrc.json

```diff
{
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "parser": "babel-eslint",
  "rules": {
-   "no-console": 0
+   "no-console": 0,
+   "max-lines": ["error", 1]
  }
}
```

>_NOTE:_ In the rule configuration, we can use the value `2` instead of `"error"` to define the severity, but for a better readability we prefer to use the `"error"` syntax instead of the numeric value.

- To "go back to normal" we should remove the rule or configure it to a more reasonable number of lines per file.

- Finally, if we want to integrate ESLint with a React based project, we can use [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) that provides linting for JSX language.