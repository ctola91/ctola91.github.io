---
title: Desarrollo Progresivo con Vue.js
img: 'img/codigo-limpio.jpg'
imgAuthorName: diego
imgAuthorLink: https://unsplash.com/@madebydiego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSiteName: Unsplash
imgSiteLink: https://unsplash.com/s/photos/uyuni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date: 2019-01-06
author: Christian Tola
location: Bolivia
tags: 
  - vue
type: post
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/blog/desarrollo-progresivo-con-vue
  - property: og:type
    content: article
  - property: og:title
    content: Desarrollo Progresivo con Vue.js
  - property: og:description
    content: Vue.js Es un Framework Javascript para el desarrollo de interfaces de usuario....
  - property: og:image
    content: https://christiantola.me/img/codigo-limpio.jpg
  - property: og:site_name
    content: christiantola.me
  - property: article:author
    content: '@ctola91'
# twitter
  - name: twitter:card
    content: summary
  - name: twitter:site
    content: '@ctola91'
  - name: twitter:title
    content: Desarrollo Progresivo con Vue.js
  - name: twitter:description
    content: Vue.js Es un Framework Javascript para el desarrollo de interfaces de usuario....
  - name: twitter:image
    content: https://christiantola.me/img/codigo-limpio.jpg
---

Vue.js es un Framework Javascript para el desarrollo de interfaces de usuario, su principal característica es la flexibilidad que ofrece al momento de desarrollar tanto aplicaciones pequeñas hasta aplicaciones empresariales de gran tamaño.

## Instalación

Es posible iniciar Vue.js simplemente utilizando un cdn para comenzar a utilizar el Framework, o si en el proyecto actualmente se usa ES6 (ECMAScript6 ) es posible importar el cdn como un modulo.

```html
<html>
    <head>
        <!-- ... -->
    </head>
    <body>
        <!-- ... -->

        <!-- Version de desarrollo, incluye ayuda y alertas en la consola -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <!-- o -->
        <!-- version de produccion optimizada -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    </body>
</html>
```

```js
// ES6
import Vue from 'import Vue from https://cdn.jsdelivr.net/npm/vue';
```

## Iniciando con Vue

Para comenzar a utilizar Vue debemos crear en nuestro html un div el cual se conectara con nuestra aplicación Vue.

```html
<div id="app"></div>

<script src="index.js"></script>
```
Luego en nuestro archivo *index.js* importaremos Vue y crearemos una nueva instancia Vue asociada al id **app** de nuestro html, en el ejemplo estamos usando ES6.

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
el Objeto Vue tiene las propiedades *el* que asocia un elemento html a la instancia Vue y *data* que es donde definimos la fuente de datos de esta instancia, en este caso solo contiene una variable *message* con el valor *'Hello Vue!'*

finalmente agregaremos entre llaves la variable del mensaje que queremos mostrar que esta definido dentro de nuestro *data*

```html
<div id="app">
    {{ message }}
</div>
```

## Data Binding

El Data Binding es la sincronización automática de datos entre los datos y la vista que los renderiza.

Vue nos provee una directiva llamada **v-model** para permitirnos hacer data binding entre el modelo y la vista, esto significa que podemos asociar un elemento dentro de la propiedad data y acceder a su valor desde la vista e incluso modificarlo

```html
<div id="app">
    <input type="text" v-model="name"/>
    <p>Hello {{ name }}!</p>
</div>
```

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    name: 'Vue'
  }
})
```

Si modificamos el valor del campo de texto vemos que el texto también es actualizado.

## Directivas

Vue utiliza un sistema de directivas dentro del html.

### v-if

La directiva **v-if** permite renderizar un componente de la aplicación dado una condición. es muy util para agregar o quitar elementos dentro de una aplicación con vue.

```html
<div id="app">
  <button @click="toogleUser">{{ view ? 'Hide': 'Show'}} user</button>
  <div>
    <div v-if="view">
      <h3>{{user.name}}</h3>
      <span>{{user.lastName}}</span>
      <p>{{user.description}}</p>
    </div>
    <div v-if="!view">
      <p>User not available.</p>
    </div>
  </div>
</div>
```

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    user: {
      name: 'Juan',
      lastName: 'Pérez',
      description: 'This is a description.'
    },
    view: true
  },
  methods: {
    toogleUser: function () {
      this.view = !this.view;
    }
  }
})
```
La directiva **v-if** verifica si el valor es true o false, si es true el contenido se añade al DOM.

La directiva **@click** Provee el evento para el clic del ratón con el cual se llama al método que actualizara el valor de la variable view, las funciones o métodos se definen dentro de la propiedad *methods* y podemos acceder a estas desde el html, en subsiguientes posts se vera mas a profundidad estos conceptos.

### v-for

La directiva **v-for** nos permite renderizar arreglos de elementos que hayamos definido dentro de la instancia Vue.

```html
<div id="app">
  <div>
    <div v-for="user in users">
      <h3>{{user.name}}</h3>
      <span>{{user.lastName}}</span>
      <p>{{user.description}}</p>
    </div>
  </div>
</div>
```

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    users: [
      {
        name: 'Juan',
        lastName: 'Pérez',
        description: 'This is a description.'
      },
      {
        name: 'Christian',
        lastName: 'Tola',
        description: 'This is my description'
      },
      {
        name: 'John',
        lastName: 'Smith',
        description: 'I am a description'
      }
    ]
  }
});
```

Esto es especialmente util para cuando necesitemos mostrar listas o tablas a partir de un array de datos.

Aca termina esta introducción al Framework Vue, en próximos posts revisaremos los eventos dentro de Vue, funciones o métodos y las propiedades computadas,

Saludos.

**Compártelo en tus redes Sociales!**