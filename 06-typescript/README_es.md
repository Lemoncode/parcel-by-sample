# Demo básico

Es hora de probar cómo se comporta Parcel cuando usamos Typescript.

# Pasos para construirlo

## Requerimientos previos

Instale [Node.js and npm](https://nodejs.org/en/) (min v8.9) si aún no está instalado en su equipo.

> Verifica que estás ejecutando al menos la versión de node v8.x.x y npm 5.x.x con los comandos `node -v` y `npm -v` en una terminal/consola. Las versiones anteriores pueden producir errores.

## Pasos

- Comenzaremos desde _01 es6_, sólo debes copiar el proyecto y ejecutar _npm install_

```bash
npm install
```

- Instalemos _tyescript_

```bash
npm install typescript --save-dev
```

- Ahora configuraremos el fichero _tsconfig.json_

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

- Seguidamente, renombramos _index.js_ a _index.ts_

- Actualicemos _index.ts_ para usar algunas características de Typescript.

_./src/index.ts_

```diff
- const sampleNumber = 1;
+ let sampleNumber : number = null;
+ sampleNumber = 6;
console.log(`Hello from sample ${sampleNumber}`);
```

- Actualicemos nuestro _index.html_ para apuntar a _index.ts_

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

- Ahora ejecutamos la demo y verificamos que todo funciona:

```bash
npm start
```

> Antes de ejecutar Parcel podríamos instalar _typescript_ si no lo hemos hecho, Parcel lo instalará por nosotros.

- Si revisamos la carpeta _dist_ podemos encontrar el código transpilado:

```
...
})({"index.ts":[function(require,module,exports) {
var sampleNumber = null;
sampleNumber = 6;
console.log("Hello from sample ".concat(sampleNumber));
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
...
```

- Si ahora cambiamos el tipo de _sampleNumber_ a _string_ obtendremos un error de transpilación. Este bug es conocido:

https://github.com/parcel-bundler/parcel/issues/465

- Necesitamos instalar un plugin para corregir este problema:

```bash
npm install parcel-plugin-typescript --save-dev
```

- En el fichero _tsconfig.json_ añadir la siguiente entrada:

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

- Ejecutemos el ejemplo otra vez y veremos los errores de compilación:

```bash
npm start
```