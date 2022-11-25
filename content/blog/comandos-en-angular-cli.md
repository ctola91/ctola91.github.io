---
title: Comandos en Angular CLI
img: 'img/config.jpg'
imgAuthorName: martin bennie
imgAuthorLink: https://unsplash.com/@martinbennie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSiteName: Unsplash
imgSiteLink: https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date: 2019-02-10
tags: 
  - angular
  - vuepress
type: post
author: Christian Tola
location: Bolivia
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/blog/comandos-en-angular-cli
  - property: og:type
    content: article
  - property: og:title
    content: Comandos en Angular CLI
  - property: og:description
    content: Angular CLI cuenta con un gran set de comandos que nos permitirán optimizar nuestro trabajo Angular.
  - property: og:image
    content: https://christiantola.me/img/config.jpg
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
    content: Comandos en Angular CLI
  - name: twitter:description
    content: Angular CLI cuenta con un gran set de comandos que nos permitirán optimizar nuestro trabajo Angular.
  - name: twitter:image
    content: https://christiantola.me/img/config.jpg
---

En este post veremos mas a profundidad los comandos que el Angular CLI nos ofrece y su uso.

## Lista de Comandos

Angular CLI nos provee una gran variedad de comandos, desde comandos para generar componentes hasta comandos para preparar nuestra aplicación para producción.
Veamos algunos de los comandos mas útiles:

### Crear un proyecto

Para generar un nuevo proyecto de angular utilizamos la sentencia ***ng new*** asignándole un nombre al proyecto a generar y las opciones a utilizar

```bash
ng new <name> <options>
```

Cada comando en angular tiene una lista de opciones que se pueden usar a continuación, para ver la lista de comandos utilice el comando --help luego del nombre del proyecto
```bash
# Lista la ayuda disponible y la lista de todas las opciones del comando utilizado
ng new <name> --help
```

Las opciones mas importantes las describiremos a continuación:

#### --dry-run

Cuando ejecutamos el comando new (o cualquier otro comando) con este comando activo, no se realizan cambios reales dentro del proyecto, este comando nos permite ver las modificaciones que realizara, esto es util para ver que generara el CLI, y comprobar si es lo que se espera.

```bash
# sintax
ng new <name> --dry-run
# sample
ng new my-app --dry-run
```
El resultado es el siguiente:

![ng new my-app --dry-run](/img/angular-cli-commands/dry-run.jpg)

Al final un warning nos dice que no se ha ejecutado ningún cambio.

#### --inline-style, --inline-template

Los comandos --inline permiten agregar los estilos o los template directamente dentro del componente.

```bash
# estilos en linea
ng new <name> --inline-style
# templates en linea
ng new <name> --inline-template
```

![ng new my-app --dry-run --inline-style --inline-template](/img/angular-cli-commands/inline.jpg)

Como se puede ver al ejecutar el comando ```ng new``` con los dos comandos en los archivos generados no se generan los html ni los css de los componentes ya que estos fueron agregados dentro de cada componente a excepción de los archivos *index.html* y *styles.css* que son el punto de acceso de la aplicación y los estilos globales respectivamente.

#### --prefix

El comando --prefix permite modificar el prefijo de los componentes que generará el CLI, por defecto los componentes se crean como ```<app-users></app-users>``` siendo **app** el prefijo de los componentes de la aplicación.

```bash
# El prefijo definido por el usuario sera ums
ng new <name> --prefix ums
```

Una buena practica es definir el prefijo con un máximo de tres letras para no tener nuestros tags de los componentes demasiado largos, si por ejemplo la aplicación a realizarse es un *Sistema de Manejo de usuarios (User Management System)* en ese caso el prefijo de los componentes para ese sistema podría llamarlo como **ums**.

#### --routing

Con el Angular CLI es posible generar el modulo de routing directamente utilizando el comando --routing esto generara el archivo *app-routing.module.ts* encargado de manejar las rutas de la aplicación.

```bash
ng new my-app --routing
```

![ng new my-app --dry-run --routing](/img/angular-cli-commands/routing.png)
#### --skip-git

Este comando evita que el CLI genere un proyecto git en el directorio de la app. 

```bash
ng new my-app --skip-git
```

#### --skip-install

Con este comando solo se generaran los archivos de la aplicación pero no se instalaran las dependencias, util para crear un proyecto vació y subirlo a un repositorio directamente, luego de ejecutar este comando debemos ejecutar en la consola ```npm install``` o ```yarn``` para instalar las dependencias dependiendo de la herramienta que usemos.

```bash
ng new my-app --skip-install
```

#### --style

Con el comando --style podemos definir si se utilizara css dentro del proyecto o algún pre-procesador por ejemplo sass

```bash
# CSS
ng new my-app --style css
# LESS
ng new my-app --style less
# SASS
ng new my-app --style sass
# SCSS
ng new my-app --style scss
# STYLUS
ng new my-app --style styl
```

![ng new my-app --dry-run --style scss](/img/angular-cli-commands/style.jpg)

#### --minimal

Este comando generara un proyecto de angular con las configuraciones mínimas que angular requiere para trabajar

```bash
ng new my-app --minimal
```

![ng new my-app --dry-run --minimal](/img/angular-cli-commands/minimal.jpg)

#### --help

Existen muchas mas opciones que se pueden agregar al comando **ng new**, es posible ver todas y la ayuda correspondiente a cada comando dentro del angular cli agregando el comando **--help**.

```bash
# Mostrar la ayuda del comando ng new
ng new --help
```

### Conclusiones

Es posible hacer combinaciones de todas las opciones para crear un proyecto de angular por ejemplo:

```bash
# Note que todas las pruebas son realizadas con --dry-run
# Para generar el proyecto quite el comando --dry-run
ng new my-app --routing --style scss --prefix ums --skip-git --skip-install --dry-run
```

![ng new](/img/angular-cli-commands/generic.jpg)

Eso es todo sobre el comando ng new, en siguientes post veremos los comandos que nos permiten generar elementos de nuestra aplicación.

Saludos!

**Compártelo en tus redes Sociales!**