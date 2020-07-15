# CSS Module

Veamos cómo de fácil es integrar css modules en nuestro bundle con Parcel

# Pasos para desarrollarlo

## Prerequisitos

Instala [Node.js and npm](https://nodejs.org/en/) (min v8.9) si aún no está instalado en su equipo

> Verifica que al menos estás ejecutando la versión de node v8.x.x y de npm 5.x.x ejecutando el comando 
> `node -v` y `npm -v` en una terminal/consola de windows. Versiones anteriores pueden provocar errores

## Pasos

- Partiendo del ejemplo _07 react_, copia el projecto y ejecuta _npm install_

```cmd
npm install
```

- Instalamos _@babel/core_ y _@babel/preset-react_

```bash
npm install @babel/core @babel/preset-react  --save-dev
```

- Añadimos el fichero de configuración de babel

 _./.babelrc_


```javascript
  {
    "presets": [
      "@babel/preset-react"
    ]
  }
```

- Ahora, instalamos _postcss-modules_

```bash
  npm install postcss-modules --save-dev
```

- Añadimos el fichero de postcssrc

_./.postcssrc_

```javascript
{
  "modules": true
}
```

- Seguidamente creamos un fichero de estilos [_mystyles.scss_] (src/mystyles.scss) 

_src/mystyles.scss_

```css
$blue-color: teal;

.hello {
  background-color: $blue-color;
}
```

- Ahora modificamos el componente **HelloComponent** en el archivo [_hello.jsx_].  Importamos el fichero scss y usamos el css module.

```javascript
import React from "react";
const classes = require("./mystyles.scss");

export const HelloComponent = () => {
    return (
        <div className={classes.hello}>
            <h2>Hello from React</h2>
        </div>
    )
};
```

- Por último ejecutamos

```
npm start
```
