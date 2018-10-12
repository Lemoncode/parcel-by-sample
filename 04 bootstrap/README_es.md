# Importar bootstrap

En esta demo vamos a instalar y configurar parcel para importar la bien conocida librería CSS
[Bootstrap](https://getbootstrap.com/).

Vamos a comenzar desde la carpeta _03 SASS_.

# Pasos a completar

## Prerrequisitos

Instalar [Node.js and npm](https://nodejs.org/en/) (min v8.9) si no está ya instalado en tu PC.

> Verificar que estás usando al menos node v8.x.x y npm 5.x.x ejecutando estos comandos `node -v` and `npm -v` en una terminal/consola de window/linux/mac. Versiones viejas pueden provocar errores.

## Pasos

- Comenzaremos desde _03 SASS_, copia el proyecto y ejecuta  _npm install_

```cmd
npm install
```

- Vamos a instalar bootstrap

```bash
npm install bootstrap --save
```

- Actualizamos nuestro html incluyendo un link a bootstrap.

```diff
<html>

<body>
+  <link rel="stylesheet" 
+     href="../node_modules/bootstrap/dist/css/bootstrap.css">
  <script src="./index.js"></script>  
```

- Modifcamos nuestro _index.html_ e incluimos algunos componentes específicos de bootstrap.

```diff
<html>
<body>
  <h1>Check the console log</h1>
+    <div class="jumbotron">
+      <h1>Testing Bootstrap</h1>
+      <p>
+        Bootstrap is the most popular ...
+      </p>
+    </div>    
  <div class="red-background">
      RedBackground stuff
  </div>  
  <script src="./index.js"></script>
</body>
</html>
```

- Iniciamos el proyecto y chequeamos que tenemos los estilos de bootstrap.

```
npm start
```