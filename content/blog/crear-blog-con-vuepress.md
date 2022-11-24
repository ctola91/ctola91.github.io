---
title: Crear un Blog con Vue.js y Vuepress
img: "img/readmore.jpg"
imgAuthorName: Sincerely Media
imgAuthorLink: https://unsplash.com/@sincerelymedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSiteName: Unsplash
imgSiteLink: https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date: 2020-04-12
author: Christian Tola
location: Bolivia
tags: 
  - vue
  - vuepress
type: post
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/blog/crear-blog-con-vuepress
  - property: og:type
    content: article
  - property: og:title
    content: Crear un Blog con Vue.js y Vuepress
  - property: og:description
    content: Vuepress es un generador de sitios estáticos basado en el framework vue.js.
  - property: og:image
    content: https://christiantola.me/img/readmore.jpg
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
    content: Crear un Blog con Vue.js y Vuepress
  - name: twitter:description
    content: Vuepress es un generador de sitios estáticos basado en el framework vue.js.
  - name: twitter:image
    content: https://christiantola.me/img/readmore.jpg
---

[VuePress](https://vuepress.vuejs.org/) es un generador de sitios estáticos basado en el framework vue.js, provee un generador minimalista de sitios estáticos con soporte de temas basado en componentes de Vue.js, una API para el soporte de plugins, y un tema por defecto optimizado para la escritura de documentación técnica, originalmente creado para soportar la documentación del framework Vue.js y sus proyectos secundarios.

![vuepress](/img/create-vuepress-blog/vuepress.png)

## Como funciona

Un sitio en vuepress es en realidad una **Single page Application (SPA)** que utiliza [Vue.js](https://vuejs.org), [vue-router](https://router.vuejs.org/) y [Webpack](https://webpack.js.org/), puedes utilizar tu experiencia en vue.js y [vue-devtools](https://github.com/vuejs/vue-devtools) para trabajar con vuepress

## Iniciar un proyecto

Iniciar en vue.js es muy sencillo, utilizaremos **markdown** para escribir el contenido que será convertido a HTML estático en nuestro sitio web, esto nos facilitara la escritura de nuestros blogs ya que no tendremos que preocuparnos en escribir los tags correctos de HTML para renderizar el contenido, vuepress lo realizara por nosotros.

Para crear nuestro blog, crearemos una carpeta llamada **my-blog** e iniciaremos un proyecto de npm, podemos dejar las opciones que nos ofrece por defecto o agregar nuestra información, al final nos generara un archivo **package.json**:

```bash
# crear folder para el blog
mkdir my-blog
cd my-blog
# crear un nuevo proyecto de npm
npm init
```

luego procederemos a instalar vuepress como dependencia de nuestro proyecto

```bash
# instalar vuepress como dependencia del proyecto
npm install --save vuepress
```

Agregaremos el script **start** en la sección de scripts de nuestro package json con el siguiente comando: `vuepress dev`, nuestro archivo _package.json_ quedara así:

```json
{
  "name": "my-blog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "vuepress dev --port 8000"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "vuepress": "^1.4.0"
  }
}
```

a continuación, agregaremos un archivo README.md para escribir nuestro primer contenido:

```bash
# crear archivo README.md
echo '# My Blog with VuePress' > README.md
```

finalmente, en la terminal ejecutaremos `npm start` para levantar el servidor y probar nuestro sitio web

![sitio online](/img/create-vuepress-blog/localhost.png)

Con estos comandos hemos creado nuestro primer documento estático utilizando vuepress.

## Agregar contenido utilizando markdown

Vuepress ya nos provee un tema por defecto, es decir podemos escribir nuestro contenido en markdown y vuepress ya aplicara los estilos que tiene definidos para esos elementos, sin necesidad de preocuparnos por agregar los estilos, o la estructura HTML necesaria.

Acá agregamos la sintaxis básica de markdown:

### Texto

| Markdown                            | HTML                                                    | Output                         |
| ----------------------------------- | ------------------------------------------------------- | ------------------------------ |
| # Title 1                           | \<h1>Title 1\</h1>                                      | <h1>Title 1</h1>               |
| ## Title 2                          | \<h2>Title 2\</h2>                                      | <h2>Title 2</h2>               |
| ### Title 3                         | \<h3>Title 3\</h3>                                      | <h3>Title 3</h3>               |
| #### Title 4                        | \<h4>Title 4\</h4>                                      | <h4>Title 4</h4>               |
| ##### Title 5                       | \<h5>Title 5\</h5>                                      | <h5>Title 5</h5>               |
| ###### Title 6                      | \<h6>Title 6\</h6>                                      | <h6>Title 6</h6>               |
| Este es un párrafo de markdown      | \<p>Este es un párrafo de markdown\</p>                 | Este es un párrafo de markdown |
| Este es un texto en \*\*negrita\*\* | \<p>Este es un texto en \<strong>negrita\</strong>\</p> | Este es un texto en **negrita** |
| Este es un texto en \*italica\*     | \<p>Este es un texto en \<em>italica\</em>\</p>         | Este es un texto en _italica_  |

### Listas

```md
<!-- Lista -->
- Primer Item
- Segundo Item
- Tercer Item
- Cuarto Item
<!-- Lista ordenada -->
1. Primero
2. Segundo
3. Tercero
4. Cuarto
```
- Primer Item
- Segundo Item
- Tercer Item
- Cuarto Item

1. Primero
2. Segundo
3. Tercero
4. Cuarto

### Tablas

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Otros Contenedores

```md
::: tip 
Esto es un tip
:::
```

::: tip
Esto es un tip
:::

puedes ver más sobre markdown en:
  - [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)
  - [Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html)

Con estos conocimientos es posible agregar contenido a nuestro blog, en siguientes tutoriales veremos cómo estructurar las rutas de nuestras aplicaciones y agregar otras funcionalidades.

He agregado un repositorio con el código usado para crear nuestro blog, puedes revisarlo en este repositorio de [github](https://github.com/cmtp/vuepress-blog/tree/v0.0.1).

Si crees que este contenido puede ser relevante para otras personas además de ti compártelo!.

Saludos!

**Compártelo en tus redes Sociales!**