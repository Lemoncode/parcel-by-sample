# Manipulación de imágenes

En este ejemplo vamos a incluir imágenes en nuestro proyecto de dos maneras diferentes: via JavaScript y via HTML.

Partiremos del ejemplo _04 Bootstrap_.

# Pasos a seguir

# Prerequisitos

Instale [Node.js and npm](https://nodejs.org/en/) (min v8.9) si aún no están instalados en su ordenador.

> Asegúrese de estar usando como mínimo la versión de node v8.x.x y la de npm 5.x.x escribiendo los comandos `node -v` y `npm -v` desde el terminal/consola. Las versiones más antiguas podrían pdroducir errores.

## Pasos

- Partiremos del ejemplo _04 Bootstrap_, para ello sólo copiaremos el proyecto en una carpeta y luego ejecutaremos _npm install_

```bash
npm install
```
- A continuación crearemos una carpeta llamada **content** dentro de la carpeta **src**, y añadiremos dos imágenes: [`logo_1`](./src/content/logo_1.png) y [`logo_2`](./src/content/logo_2.png).

- Añadamos ahora un _div container_ en nuestro _`index.html`_ donde ubicar una imagen, al que le asignaremos una _id_ = `"imgContainer"`.

_./src/index.html_

```diff
  <h1>Check the console log</h1>
+ <div id="imgContainer"></div>  
  <div class="jumbotron">
```

- Iremos ahora a _`index.js`_ e importaremos [`logo_1`](./src/content/logo_1.png) usando _JavaScript_. 
A continuación, la colocaremos bajo el `<div>` con la `id` anterior:

_./src/index.js_

```diff
import './mystyles.scss';
+ import logoImg from './content/logo_1.png';

const sampleNumber = 1;
console.log(`Hello from sample ${sampleNumber}`);

+ const img = document.createElement('img');
+ img.src = logoImg;

+ document.getElementById('imgContainer').appendChild(img);
```

- Perfecto por ahora pero, y si ya tenemos la imagen referenciada en una HTML `<img>` tag? Añadamos [`logo_2.png`](./src/content/logo_2.png) al archivo _index.html_:

_./src/index.html_

```diff
  <h1>Check the console log</h1>
  <div id="imgContainer"></div>  
+ <img src="./content/logo_2.png"/>
  <div class="jumbotron">
```

- Ejecutemos el ejemplo.

```bash
npm start
```

- Podemos ver que parcel resuelve los `src` de las images para que puedan ser cargadas por el servidor:

![images src](../Readme_resources/05_images/00_images_src.png)