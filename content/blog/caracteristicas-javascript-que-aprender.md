---
title: Características de Javascript que aprender
img: "img/codigo-limpio.jpg"
imgAuthorName: martin bennie
imgAuthorLink: https://unsplash.com/@martinbennie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSiteName: Unsplash
imgSiteLink: https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date: 2019-12-25
author: Christian Tola
tags: 
  - javascript
type: post
location: Bolivia
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/blog/caracteristicas-javascript-que-aprender
  - property: og:type
    content: article
  - property: og:title
    content: Características de Javascript que aprender
  - property: og:description
    content: Javascript va mejorando a pasos agigantados, actualmente contamos con es5, es6, y más, en este post veremos las características más importantes que deberíamos conocer para mejorar nuestro código...
  - property: og:image
    content: https://christiantola.me/img/codigo-limpio.jpg
  - property: og:site_name
    content: christiantola.me
  - property: article:author
    content: https://www.facebook.com/ctola01/
# twitter
  - name: twitter:card
    content: summary
  - name: twitter:site
    content: '@ctola91'
  - name: twitter:title
    content: Características de Javascript que aprender
  - name: twitter:description
    content: Javascript va mejorando a pasos agigantados, actualmente contamos con es5, es6, y más, en este post veremos las características más importantes que deberíamos conocer para mejorar nuestro código...
  - name: twitter:image
    content: https://christiantola.me/img/codigo-limpio.jpg
---

## Introducción 

Javascript es un lenguaje muy poderoso, con una gran comunidad por detrás, e infinidad de Frameworks o librerías, este lenguaje fue creado por **Brendan Eich** con el nombre de **mocha** (no confundir con el Framework de testing [Mocha](https://mochajs.org/)) mientras se encontraba trabajando en Netscape, no pasaría mucho tiempo para que luego el lenguaje fuera renombrado a **[LiveScript](https://en.wikipedia.org/wiki/JavaScript#Beginnings_at_Netscape)**, luego Netscape seria adquirido por SUN y por una estrategia de marketing el nombre final sería **Javascript**, al mismo tiempo Microsoft saco una versión similar conocida como **[Jscript](https://en.wikipedia.org/wiki/JScript)** en su navegador Internet Explorer 3, para evitar que todos los navegadores hicieran versiones similares que llevarían a competir entre ellos, se decidió que lo mejor sería estandarizar el lenguaje, de ahí que la version de javascript 1.1 se envió a la *ECMA* (European Computer Manufacturers Association) que creo el comité *TC39* para estandarizar el lenguaje, así es como se creó el estándar ECMA-262 en el que se define por primera vez el lenguaje **ECMAScript**, ECMAScript busca estandarizar el lenguaje a usar dentro de los navegadores. Javascript es una implementación del estándar ECMAScript.

Las actualizaciones del estándar son periódicas, se proponen y se revisan posibles nuevas características del lenguaje, ECMAScript con el paso del tiempo ha tenido muchas versiones, una de las versiones más conocida es la **ECMAScript 2015**, o **ES6**, que es una versión de la especificación con muchas mejoras que su antecesora, las nuevas características propuestas que podrían llegar en una nueva versión de ECMAScript son conocidas como **ES.NEXT**,

Con esta introducción entendemos un poco mas sobre que es ECMAScript, y por que es importante cuando escribimos código Javascript, en este articulo iremos agregando los features que deberíamos conocer para empezar a crear aplicaciones, ya sea utilizando el estándar(ES5, ES6, ES7, ES8, etc.) o algún Framework, para el desarrollo de aplicaciones del lado del cliente(Angular, Vue, React).

## LET (ES6)

Para declarar variables en javascript generalmente utilizamos la palabra reservada **var**, pero al utilizar la palabra var estamos creando una variable global dentro del ámbito de toda la aplicación, pruebe en la consola del navegador hacer lo siguiente:

```js
var title = 'Hello World';
console.log(window.title); // Hello World
```

Como vera al hacer ```console.log(window.title);``` este imprime el valor de la variable title.

![var sample](/img/js-features-you-may-know/first.jpg)

otro ejemplo es cuando utilizamos la sentencia **for**:

```js
for(var i = 0; i <= 10; i++) {
  console.log(i); // 1, 2, 3, ... , 10
}
console.log(i) // 11
```
en este caso podemos ver que la variable *i* sigue activa luego de haber finalizado el bucle, regresando el ultimo valor que fue asignado a la variable *i*, esto podría ocasionar errores mas adelante si volvemos a llamar a la variable i global, para evitar este problema nace la sentencia **let**.

```js
for(let i = 0; i <= 10; i++) {
  console.log(i); // 1, 2, 3, ... , 10
}
console.log(i); // ReferenceError: i is not defined
```
como la variable *i* solo existe dentro del ámbito del bucle fuera de este causa un error.

La palabra reservada *let* nos permite crear variables que pertenecen solo al ámbito del bloque donde se declaran, ademas de evitar el *Hoisting*.

## const (ES6)

Para asignar valores que no van a cambiar en el tiempo (Constantes), utilizamos la sentencia **const**.

```js
const PI = 3.14;
PI = 123; // TypeError: Assignment to constant variable.
```
los valores que son declarados con const una vez asignados no pueden reasignarse, útiles al momento de declarar constantes dentro de nuestra aplicación.

![const sample](/img/js-features-you-may-know/second.jpg)

Cuando almacenamos objetos utilizando la sentencia *const* la referencia al objeto no se puede cambiar, pero si es posible modificar sus atributos.

```js
const person = {
  name: 'Christian',
  lastName: 'Tola'
};
console.log(person); // { name: 'Christian', lastName: 'Tola' }

person.name = 'Marcelo';
console.log(person); // { name: 'Marcelo', lastName: 'Tola' }
```

![const sample object](/img/js-features-you-may-know/third.jpg)

## Spread Operator (ES6)

El Operador de Propagación (spread operator) convierte on objeto iterable en valores individuales, muy util al momento de utilizar arrays u objetos para pasar valores.

```js
// Merge two arrays

let newUsers = ['tester', 'dev', 'dbadmin', 'devops'];
oldUsers = ['admin'];
allUsers = [ ...oldUsers, ...newUsers ]; // ['admin', 'tester', 'dev', 'dbadmin', 'devops']

/// add array inside another array

let courses = ['sql', 'js', 'c#', 'java'];

let languages = ['python', 'go'];

courses.push(...languages); // ['sql', 'js', 'c#', 'java','python', 'go']
```

## Rest Parameter (ES6)

Es lo contrario de el operador spread, convierte una lista de elementos a un array, util al momento de enviar múltiples parámetros a una función.

```js
function setNumbers(param1, param2, ...args) {
  console.log(param1); // 1
  console.log(param2); // 2

  console.log(args); // [3, 4, 5, 6]
}

setNumbers(1, 2, 3,4,5,6);
```

## Destructuring (ES6)

La desestructuración es uno de los features que trae ES6 que son mas usados, varias librerías se aprovechan de esta funcionalidad.

La desestructuración hace posible la extracción de datos de arreglos u objetos a valores simples, todo en una sola sentencia, veamos un ejemplo:

```js
var 
// antes de ES6
var name = myUser.name; // Christian
var lastName = myUser.lastName; // Tola
var age = myUser.age;  // 28

// con ES6
let myUser = { name: 'Christian', lastName: 'Tola', age: 28};
const { name, lastName, age } = myUser;
```
lo mismo aplica para los arreglos, la desestructuración se aplica en base a las posiciones del arreglo.

```js
let numbers = ['1', '2'];

const [first, second] = numbers;
console.log(first); // 1
console.log(second); // 2
```
Es posible agregar valores por defecto en el caso que alguno de los elementos sea undefined.
```js
...
const { id, name = 'generic', description = 'test'} = element;
...

```
y también ser usados en parámetros de funciones:
```js
const registerUser = ({name, lastName, age}) => {
  ...
  console.log(name); // Christian
  console.log(lastName); // Tola
  console.log(age); // 28
}

let myUser = { name: 'Christian', lastName: 'Tola', age: 28};
registerUser(myUser);
```

## Arrow Functions (ES6)
ES6 provee una nueva forma de crear funciones usando el operador flecha (=>), recuerdas las funciones anonimas? con la nueva sintaxis de las funciones flecha estas son mas resumidas:
```js
// antes de ES6
setTimeout(function () {
  console.log('hello world');
}, 1000);

// con Es6
setTimeout(() => {
  console.log('hello world');
}, 1000)

```

## Template Literals

Es una nueva forma de crear cadenas de texto que nos permite crear cadenas de texto mas dinamicas ademas de tener soporte de multilinea.
```js
// antes de ES6
var dinamicText = "Hi my name is: " + name + ", I am a " + workPosition;
// con ES6
let dimanicText = `Hi my name is: ${name}, I am a ${workPosition}`;
```

## Map, WeakMap

De manera sencilla, el metodo ```map()``` devuelve un nuevo array al que se le aplican operaciones para trasformar sus elementos, un ejemplo seria sacar la raiz cuadrada de todos los elementos del array:

```js
let array = [ 1, 4, 9];
let newArray = array.map(e => Math.sqrt(e));
console.log(array); // [1, 4, 9]
console.log(newArray); //Resultado [1, 2, 3]
```

## Classes

Es una nueva sintaxis para la herencia basada en prototipos, 
no sufren del efecto de *hoisting*, por ende no se pueden utilizar si no han sido declaradas primero.
```js
class Person {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(birthday);
    }
    getAge() {
        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
```

## Promises

Una Promesa (Promise) es un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona.

```js
// creacion de promesas
function fetchItems(url) {
  return new Promise((resolve, reject) => {
    // ...

    if(/*error condition*/) {
      return reject();
    }
    return resolve();
  });
}
// uso de promesas
fetchItems('/items')
  .then(data => console.log(data))
  .catch(error => console.log(error));

```
Aca les envio un link con una muy buena explicacion de lo que son las promesas y su uso.

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Async/Await

La palabra reservada ```async``` define una funcion asincrona que retorna un objeto ```AsyncFunction```.

```js
renderItems => async () => {
  let data = await fetchItems('/items');
  if(data.error) {
    throw new Error(data.error);
  }
  console.log(data.results);
}
```

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Hasta aqui hemos agregado los feature que cualquier desarrollador Javascript deberia saber.
Hasta pronto!

**Compártelo en tus redes Sociales!**