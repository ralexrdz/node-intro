# node-intro

## NodeJS y JS

- Diferencias entre Node y otros lenguajes
- Event Loop y Event Driven Programing
- High Level Programing
  - Funciones anidadas dentro de funciones
- Comandos
  - `$ node` abre terminal de Node
    - `Ctrl+C` * 2 para salir o `.exit`
  - `$ node <jsfile.js>`
  - `$ which node` -> la ruta a los binarios de node: `/local/bin/node`
  - `$ node --version` saber la versión de node en mi máquina


## npm (Node Package Manager) y package.json y nvm (Node Version Manager)

- Para qué sirve?
  - capacidad de replicar el ambiete de packetes o modulos cuando se va desarrollar y se va a deployar a producción
  - dev configuration
  - produc configuration
  - tests (Test Driven Develpment)
- Comandos
  - Asegurarse de tener node instalado
    - `$npm --version` saber la versión de npm en mi máquina
    - `$ npm init` crea el archivo de configuración de app de Node `package.json`
    - `$ npm (install / i) (--save / -s) <package-name>@v#.#.#` con save, se guardara en nuestro archivo de configuración
    - `$ npm install` consulta los packetes en la campo de package-json `dependencies`
     - `$ npm update <package-name>` busca y remplaza la versión del packete por la versión más actualizada


## Callbacks, Async, Promises

- fs FileSystem
  - Comandos
-

## Variables de ambiente ENV variables

- Cómo utilizarlas y para qué sirven



## ES6 y Functional Programing

- [E6 Feature](http://es6-features.org)
  - Las más importantes
    - Arrow functions
    - [Functional Programing](https://lodash.com/) (find, filter, map, reduce)
    - import / export
    - Spread operator (...array) y Object.assing
    - def values en funciones y en def de var


## Require, import, exports

- require (ES5)

``` js
let libName = require('./ruta/a/lib.js') // para importar
```

``` js
module.export { <funciones o variables a exportar>} // para exportar
```

- ES6

``` js
import * as todaLaLibreria from './ruta/a/lib.js' // para importar con Babel
// .mjs con modulos experimentales
```

``` js
export { <funciones o variables a exportar>} // para exportar
```



## [Babel](https://babeljs.io), gulp, webpack

