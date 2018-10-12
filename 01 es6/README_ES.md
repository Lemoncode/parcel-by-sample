# Ejemplo básico

Es hora de comprobar como se comporta parcel cuando se utiliza ES6. ¿Se transpila a ES5?

# Pasos para construirlo

## Prerequisitos

Instala [Node.js and npm](https://nodejs.org/es/) (min v8.9) si aún no lo tienes instalado en tu ordenador.

> Comprueba que estás utilizando al menos la versión de node v8.x.x y npm 5.x.x para ello ejecuta `node -v` y `npm -v` en un terminal/consola de Windows. Versiones anteriores pueden producir errores.

## Pasos

- Vamos a partir de _00 basic_, simplemente copia el proyecto y ejecuta _npm install_

```bash
npm install
```

- Actualicemos ahora nuestro ejemplo y utilicemos algunas características chulas de ES6.

_./src/index.js_

```diff
+ const sampleNumber = 1;
- console.log("hello parcel!");
+ console.log(`Hello from sample ${sampleNumber}`);
```

- Ahora vamos a ejecutar una build y comprobar si el código ya se ha transpilado.

```bash
npm run build
```

- Y lo tenemos

_./dist/src.XXXXX.js

```javascript
...
})({"index.js":[function(require,module,exports) {
var sampleNumber = 1;
console.log("Hello from sample ".concat(sampleNumber));
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
...
```