# Custom CSS

Vamos a empezar a trabajar con estilos.

En esta demo, vamos a crear un fichero CSS personalizado el cuál tendrá una clase de css simple para cambiar el color del fondo a rojo.

Vamos a partir del ejemplo _01 es6_.

Resumen de pasos:
 - Crear un fichero css personalizado.
 - Usarlo en la página principal.

# Pasos para construirlo

## Prerequisitos

Instala [Node.js and npm](https://nodejs.org/es/) (min v8.9) si aún no lo tienes instalado en tu ordenador.

> Comprueba que estás utilizando al menos la versión de node v8.x.x y npm 5.x.x para ello ejecuta `node -v` y `npm -v` en un terminal/consola de Windows. Versiones anteriores pueden producir errores.

## Pasos

- Vamos a partir de _01 es6_. Simplemente copia el proyecto y ejecuta _npm install_

```bash
npm install
```

- Vamos a crear el fichero _mystyles.css_

_./src/mystyles.css_

```css
.red-background {
 background-color: indianred;
}
```

- Vamos a import este css en el fichero index.js:

_./src/index.js_

```diff
+ import './mystyles.css';

const sampleNumber = 1;
console.log(`Hello from sample ${sampleNumber}`);
```

- Y ahora solamente tenemos que usar el estilo directamente en el fichero HTML. Vamos a actualizar `index.html`.

_./src/index.html_

```diff
<html>
<body>
  <h1>Check the console log</h1>
+ <div class="red-background">
+  RedBackground stuff
+ </div>  
  <script src="./index.js"></script>
</body>
</html>
```

- Una vez hemos modificado el fichero html, vamos a ejecutar el proyecto:

```cmd
npm start
```

- Finalmente, podemos comprobar los ficheros compilados. Por ejemplo, en el fichero compilado html, vemos que Parcel ha añadido la dependencia del css:

_./dist/index.html_
```diff
<html>
+<link rel="stylesheet" href="/src.fec37933.css"><body>
  
  <h1>Check the console log</h1>
    <div class="red-background">
      RedBackground stuff
    </div> 
    <script src="/src.fec37933.js"></script>
</body>
</html>
```
