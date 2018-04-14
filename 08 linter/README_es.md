# Linting

Parcel, por defecto, no ofrece integración con eslint o tslint, hay que hacerlo mediante complementos.

Esta disponible el complemento ([parcel-plugin-eslint](https://github.com/BoltDoggy/parcel-plugin-eslint)), pero está en  _estado experimental_. Vamos a ver como usarlo, pero en el momento de escribir este documento, no se recomienda usarlo fuera de un entorno de pruebas.

## Pasos para implementarlo

### Prerrequisitos

Instalar [Node.js and npm](https://nodejs.org/es/) (min v8.9) si todavía no lo tiene instalado en su equipo.

> Verificar que está se están usando como mínimo las versiones de node v8.x.x y npm 5.x.x ejecutando `node -v`y `npm -v` en un terminal/consola. Versiones anteriores pueden producir errores.

### Pasos

- Empezaremos desde el ejemplo _01 es6_; simplemente copie el proyecto y ejecute `npm install`.

```bash
npm install
```

- [ESLint](http://eslint.org/) es la nueva herramienta de _linting_ que va al siguiente nivel y nos permite usar reglas personalizadas, parseadores, complementos, etc. Vamos a empezar descargando la librería `eslint` via `npm`:

```bash
npm install eslint --save-dev
```

- ESLint trabaja con Babel y la sintaxis JSX instalando complementos. Si, es una gran librería para desarrollador proyectos de React. Este ejemplo es una demo por lo que solo implementaremos una configuración básica.

  Vamos a crear el fichero `eslintrc.json` (hay muchas [opciones de formato de archivo](http://eslint.org/docs/user-guide/configuring#configuration-file-formats))

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

- **Nótese que `eslint:recommended` no puede incluir espacios después del caracter (:).**

- Esta es la configuración más básica donde estamos usando [reglas por defecto](http://eslint.org/docs/rules/) suministradas por ESLint y donde definimos [entornos de navegador y Node](http://eslint.org/docs/user-guide/configuring#specifying-environments). `browser` se utiliza para el uso de variables globales de navegador como el objeto *window* y `node` para las variables globales de Node como *require* o *__dirname*.

- Vamos a instalar el complemento de linting para Parcel.

```bash
npm install parcel-plugin-eslint --save-dev
```

- Vamos a probar el ejemplo.

```bash
npm run build
```

> Si usa Visual Studio Code y quiere ver los errores de _linting_ en la pestaña _problemas_, debe instalar la extensión [ESLint para VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Se puede ver el siguiente error:

  _Parsing error: The keyword 'const' is reserved_.

  La declaración `const` la proporciona Babel, por lo que ha llegado el momento de conectar ESLint con Babel:

```bash
npm install babel-eslint --save-dev
```

  En el fichero ./.eslintrc.json tenemos que añadir el parseador.

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

- Ahora podemos ver que el error que muestra ESLint dentro del fichero index.js es para `console.log`. Necesitamos configurar ESLint para deshabilitar esta regla.

### Definiendo reglas

- Tal como hemos visto, estamos usando [las reglas por defecto de ESLint](http://eslint.org/docs/rules/) que configuramos en el fichero de configuración de ESLint.

  ./.eslintrc.json

```json
{
  "extends": [
    "eslint:recommended"
  ],
  ...
}
```

- La buena noticia es que podemos [configurar todas estas reglas](http://eslint.org/docs/user-guide/configuring#configuring-rules) usando los siguientes valores:

  - `0` or `off` - Deshabilitar la regla.
  - `1` or `warn` - Habilitar la regla en modo "advertencia".
  - `2` or `error` - Habilitar la regla en modo "error".

  - Por lo que para deshabilitar la regla `console` debemos añadir la siguiente configuración:

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

- Cuando guarde los cambios, entonces verá que el error que referenciaba a console ya no se muestra.

- Otro ejemplo es la regla [max-lines](http://eslint.org/docs/rules/max-lines). Esta regla _fuerza un número máximo de líneas por fichero para ayudar al mantenimiento y reducir la complejidad_. Solo para poder mostrar esta regla vamos a configurarla con un número de líneas ridículo, exáctamente 1, para poder ver el error.

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

> _NOTA:_ En la configuración de la regla podemos usar el valor `2` en lugar de `"error"` para definir la severidad, pero para una lectura mejor, preferimos usar la sintaxis `"error"` en vez del valor numérico.

- Para "volver a la normalidad" quitaremos esta regla o la configuraremos con un número de líneas por fichero más razonable.

- Finalmente, si queremos integrar ESLint con proyectos de React, podemos usar [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) que suministra el linting para el lenguaje JSX.