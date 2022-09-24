---
title: Patrones de diseño
img: 'img/dessign-patterns.jpg'
imgAuthorName: diego
imgAuthorLink: https://unsplash.com/@madebydiego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSiteName: Unsplash
imgSiteLink: https://unsplash.com/s/photos/uyuni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date: 2019-1-20
author: Christian Tola
tags: 
  - code
  - patterns
  - javascript
type: post
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/blog/design-patterns.html
  - property: og:type
    content: article
  - property: og:title
    content: Patrones de diseño
  - property: og:description
    content: En el año 1995 se publico el libro "Design Patterns - Elements of Reusable Object Oriented Software"...
  - property: og:image
    content: https://christiantola.me/images/banners/BannerTemplateJavascript.jpg
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
    content: Patrones de diseño
  - name: twitter:description
    content: En el año 1995 se publico el libro "Design Patterns - Elements of Reusable Object Oriented Software"...
  - name: twitter:image
    content: https://christiantola.me/images/banners/BannerTemplateJavascript.jpg
---

<WebImage name="banners/BannerTemplateJavascript.jpg" alt="Design patterns"/>

## Que son?

Los Patrones de diseño *(Design patterns en ingles)* son soluciones a problemas de diseño recurrentes que ocurren en la programación, al ser recurrentes estos problemas, un desarrollador podría encontrar diferentes maneras de abordar el problema llegando a diferentes soluciones, algunas mas optimas que otras.

En el año 1995 se publico el libro *"Design Patterns - Elements of Reusable Object Oriented Software"* publicado por el **"Gang of Four"** *(la banda de los cuatro)*, nombre con el que se conoce a los autores del libro. **Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides**. Este es el libro de referencia en cuanto a patrones de diseño.

Los patrones de diseño son soluciones ya conocidas y probadas cuyo diseño proviene de la experiencia del programador, no tienen un marco teórico, están basados en las buenas practicas de la programación orientada a objetos.

## Catálogo de Patrones de diseño

Según la clasificación del *"GoF"* los patrones de diseño están divididos en los siguientes grupos:

| Patrones de Construcción | Patrones de Estructuración | Patrones de Comportamiento |
| ------------------------ |:--------------------------:| --------------------------:|
| Abstract Factory         | Adapter                    | Chain of Responsibility    |
| Builder                  | Bridge                     | Command                    |
| Factory Method           | Composite                  | Interpreter                |
| Prototype                | Decorator                  | Iterator                   |
| Singleton                | Facade                     | Mediator                   |
|                          | Flyweight                  | Memento                    |
|                          | Proxy                      | Observer                   |
|                          |                            | State                      |
|                          |                            | Strategy                   |
|                          |                            | Template Method            |
|                          |                            | Visitor                    |

### Patrones de Construcción

Los patrones de construcción tienen como objetivo organizar la creación de objetos.

#### Abstract Factory

Tiene como objetivo la creación de objetos reagrupados en familias sin tener que conocer las clases concretas destinadas a la creación de estos objetos.

#### Builder

Permite separar la creación de objetos complejos de su implementación de modo que un cliente pueda crear estos objetos complejos con implementaciones diferentes

#### Factory Method

Tiene como objetivo presentar un método abstracto para la creación de un objeto reportando a las subclases concretas la creación efectiva

#### Prototype

Permite crear nuevos objetos por duplicación de objetos existentes llamados prototipos que disponen de la capacidad de colación.

#### Singleton

Permite asegurar que de una clase concreta exista una única instancia y proporciona un método único que la devuelve.

### Patrones de Estructuración

Facilitan la organización de la jerarquía de clases y de sus relaciones.

#### Adapter

Tiene como objetivo convertir la interfaz de una clase existente en la interfaz esperada por los clientes también existentes para que puedan trabajar de forma conjunta.

#### Bridge

Tiene como objetivo separar los aspectos conceptuales de una jerarquía de clases de su implementación.

#### Composite

Proporciona un marco de diseño de una composición de objetos con una profundidad de composición variable, basándose en el diseño de un árbol.

#### Decorator

Permite agregar dinamicamente funcionalidades suplementarias a un objeto.

#### Facade

Tiene como objetivo reagrupar las interfaces de un conjunto de objetos en una interfaz unificada que resulte mas fácil de utilizar.

#### Flyweight

Facilita la comparticion de un conjunto importante de objetos con granularidad muy fina.

#### Proxy

Construye un objeto que se substituye por otro objeto y que controla su acceso.

### Patrones de Comportamiento

Proporcionan soluciones para organizar las interacciones y para repartir el procesamiento entre los objetos.

#### Chain of Responsibility

Crea una cadena de objetos tal que si un objeto de la cadena no puede responder a una petición, la pueda transmitir a sus sucesores hasta que uno de ellos responda.

#### Command

Tiene como objetivo transformar una consulta en un objeto, facilitando operaciones como la anulación, la actualización de consultas y su seguimiento.

#### Interpreter

Proporciona un marco para dar una representación mediante objetos de la gramática de un lenguaje con el objetivo de evaluar, interpretando las expresiones escritas en este lenguaje.

#### Iterator

Proporciona un acceso secuencial a una colección de objetos sin que los clientes se preocupen de la implementación de esta colección.

#### Mediator

Construye un objeto cuya vocación es la gestión y el control de las interacciones en el seno de un conjunto de objetos sin que estos elementos se conozcan mutuamente.

#### Memento

Salvaguarda y restaura el estado de un objeto.

#### Observer

Construye una dependencia entre un sujeto y sus observadores de modo que cada modificación del sujeto sea notificada a los observadores para que puedan actualizar su estado.

#### State

Permite a un objeto adaptar su comportamiento en función a su estado interno.

#### Strategy

Adapta el comportamiento y los algoritmos de un objeto en función de una necesidad concreta sin para ello cargar las interacciones con los clientes de este objeto.

#### Template Method

Permite reportar en las subclases ciertas etapas de una de las operaciones de un objeto, estando estas descritas en las subclases.

#### Visitor

Construye una operación a realizar en los elementos de un conjunto de objetos. Es posible agregar nuevas operaciones sin modificar las clases de estos objetos.

En siguientes artículos estudiaremos los patrones de diseño y como utilizarlos, que tengan un buen dia.

Saludos.

**Compártelo en tus redes Sociales!**
::SocialButtons
::

::Disqus
::