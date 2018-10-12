# Muestra básica

Comencemos con una muestra muy básica, solo agregue un html más un registro de consola simple (E5), lo que puede encontrar en el tutorial de inicio.

# Pasos para construirlo

## Prerrequisitos

Instale [Node.js y npm](https://nodejs.org/en/) (mínimo v8.9) si aún no están instalados en su computadora.

> Verifique que esté ejecutando al menos los nodos v8.x.x y npm 5.x.x ejecutando `node -v` y` npm -v` en una terminal / consola de windows. Las versiones anteriores pueden producir errores.

## Pasos

- Navega a la carpeta donde vas a crear el proyecto vacío.

- Ejecute `npm init`, se le pedirá que responda alguna solicitud de información
sobre el proyecto (una vez que haya completado con éxito un **[package.json](./package.json)**
archivo que generaremos).

```bash
npm init -y
```

> Asegúrese de que su carpeta principal no incluya espacios ni mayúsculas (si ese es el caso, puede ejecutar `npm init` y cambiar el nombre del proyecto).

- Vamos a instalar el paquete 

```bash
npm install parcel-bundler --save-dev
```

- Creemos un archivo básico [/src/index.js](./src/index.js) (compatible con es5):

_[/src/index.js](./src/index.js)_
```javascript
console.log("hello parcel!");
```

- Creemos un archivo ficticio [/src/index.html](./src/index.html)

_[/src/index.html](./src/index.html)_
```html
<html>
<body>
  <script src="./index.js"></script>
  <h1>Check the console log</h1>
</body>
</html>
```

- Ahora agreguemos el siguiente comando a nuestro [package.json](./package.json)

_[package.json](./package.json)_
```diff
  "scripts": {
+   "build": "parcel ./src/index.html"
-   "test": "echo \"Error: no test specified\" && exit 1"
  },
```


- Vamos a ejecutar el **build**.

```bash
npm run build
```

> Se generará una nueva carpeta _[/dist](./dist)_ que contiene la solución incluida.

- ¿Qué pasa si necesitamos una versión preparada para producción? agreguemos el siguiente comando
en nuestro [package.json](./package.json):

_[package.json](./package.json)_
```diff
  "scripts": {
-   "build": "parcel ./src/index.html"
+   "build": "parcel ./src/index.html",
+   "build:prod": "parcel build ./src/index.html"
  },
```

- Ahora, si ejecuta el comando obtendrá una versión minificada más _NODE_ENV=production_

```diff
npm run build:prod
```

- Hay un problema: los archivos viejos no se borran, agreguemos el complemento **rim-raf** para asegurarnos de que estamos
limpiando la carpeta _[/dist](./dist)_ antes de generar el paquete.

```bash
npm install rimraf --save-dev
```

- Agreguemos un paso adicional al proceso de compilación:

_[package.json](./package.json)_
```diff
  "scripts": {
-   "build": "parcel ./src/index.html",
+   "build": "rimraf dist && parcel ./src/index.html",
-   "build:prod": "parcel build ./src/index.html"
+   "build:prod": "rimraf dist && parcel build ./src/index.html"
  },
```

- Añadimos nuestro **script** para poder lanzar nuestra aplicación, **start**, dentro de [package.json](./package.json):

_[package.json](./package.json)_
```diff
  "scripts": {
    "build": "rimraf dist && parcel ./src/index.html",
-   "build:prod": "rimraf dist && parcel build ./src/index.html"
+   "build:prod": "rimraf dist && parcel build ./src/index.html",
+   "start": "rimraf dist && parcel ./src/index.html --open"
  },
```

Ahora lanzamos en la consola el comando `npm run start` y verificamos los resultados.