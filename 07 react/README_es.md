# Ejemplo básico

Veamos cómo de fácil es integrar jsx en nuestro bundle con Parcel

# Pasos para desarrollarlo

## Prerequisitos

Instala [Node.js and npm](https://nodejs.org/en/) (min v8.9) si aún no está instalado en su equipo

> Verifica que al menos estás ejecutando la versión de node v8.x.x y de npm 5.x.x ejecutando el comando 
> `node -v` y `npm -v` en una terminal/consola de windows. Versiones anteriores pueden provocar errores

## Pasos

- Partiendo del ejemplo _01 es_, copia el projecto y ejecuta _npm install_

```cmd
npm install
```

- Instalamos _react_ y _react-dom_

```bash
npm install react react-dom --save
```

- Creamos el componente **HelloComponent** en el fichero [_hello.jsx_](src/hello.jsx) (./src/hello.jsx)

```javascript
import React from 'react';

export const HelloComponent = () => <h2>Hello from React</h2>
```

- Ahora, en el fichero [_index.html_](src/index.html) (./src/index.html) creamos un contenedor div para instanciar nuestra aplicación react. Ademas, cambiamos el orden de importación del script al final del body (así nos aseguramos que el contenedor root está disponible cuando el script se ejecute)


```diff
<html>
<body>
  <h1>Check the console log</h1>
+  <div id="root">
+  </div>
   <script src="./index.js"></script>
</body>
</html>
```

- Seguidamente creamos el punto de entrada en el fichero [_index.js_](src/index.js) (./src/index.js)

```diff
+   import React from 'react';
+   import ReactDOM from 'react-dom';
+   import {HelloComponent} from './hello.jsx';

+   ReactDOM.render(
+     <HelloComponent />,
+     document.getElementById('root')
+   );

- const sampleNumber = 1;
- console.log(`Hello from sample ${sampleNumber}`);
```

- Por último ejecutamos

```
npm start
```
