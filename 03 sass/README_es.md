# SASS

Veamos cómo agregar soporte para [SASS](https://sass-lang.com/)

# Pasos para construirlo

## Requerimientos previos

Instale [Node.js y npm](https://nodejs.org/en/) (min v8.9) si aún no está instalado en tu equipo.

> Verifica que estás ejecutando al menos la versión de node v8.x.x y npm 5.x.x con los comandos `node -v` y `npm -v` en una terminal/consola. Las versiones anteriores pueden producir errores.

## Pasos

- Comenzaremos desde _02 custom css_, sólo debes copiar el proyecto y ejecutar _npm install_

```bash
npm install
```

- Vamos a reemplazar los ficheros css por sass y delegar en Parcel la instalación de las dependencias.

- Ahora cambiemos el nombre de _mystyles.css_ a _mystyles.scss_ y actualicemos el contenido.

_mystyles.scss_

```diff
+ $blue-color: teal;

.red-background {
- background-color: indianred;
+ background-color: $blue-color;
}
```

- Ahora actualicemos _index.js_ para cambiar la extensión por sass.

_index.js_

```diff
- import './mystyles.css';
+ import './mystyles.scss';

const sampleNumber = 1;
console.log(`Hello from sample ${sampleNumber}`);
```

- Ahora ejecutemos la demo.

```bash
npm start
```

- Si Parcel no puede instalarlo, necesitamos instalar sass:

```bash
npm install sass --save-dev
```
