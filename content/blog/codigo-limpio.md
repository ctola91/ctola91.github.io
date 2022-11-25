---
title: Código Limpio
img: 'img/codigo-limpio.jpg'
imgAuthorName: martin bennie
imgAuthorLink: https://unsplash.com/@martinbennie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSiteName: Unsplash
imgSiteLink: https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date: 2019-01-03
tags: 
    - code
    - patterns
type: post
author: Christian Tola
location: Bolivia
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/blog/codigo-limpio
  - property: og:type
    content: article
  - property: og:title
    content: Código Limpio
  - property: og:description
    content: Que es el código limpio? por que deberíamos escribir código limpio? Aprenderemos mas sobre las bases del código limpio.
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
    content: Código Limpio
  - name: twitter:description
    content: Que es el código limpio? por que deberíamos escribir código limpio? Aprenderemos mas sobre las bases del código limpio.
  - name: twitter:image
    content: https://christiantola.me/img/codigo-limpio.jpg
---

*Este es el primer articulo de la serie de código limpio donde iremos agregando consejos de como mejorar nuestro código.*

¿Que es el código limpio? ¿Por que deberíamos escribir código limpio?, primero revisemos las bases sobre que es código limpio.

## Que es el código limpio?

Existen varias definiciones, y a mi parecer todas son correctas, una de las mas completas que he visto es la de **Bjarne Stroustrup** inventor de *C++* y autor de **The C++ Programming Language**:

> *"Me gusta que mi código sea elegante y eficaz. La lógica deb ser directa para evitar errores ocultos, las dependencias deben ser mínimas para facilitar el mantenimiento, el procesamiento de errores completo y sujeto a una estrategia articulada, y el rendimiento debe ser optimo para que los usuarios no tiendan a estropear el código con optimizaciones sin sentido. El código limpio hace bien una cosa."*

El código limpio es simple, y elegante, debe ser sencillo de leer, fácil de extender.
 
Veamos como escribir código limpio.

## Nombres con Sentido

Se deben usar nombres que revelen las intenciones, estos nombres si bien son validos, no brindan información util al desarrollador.

```ts
// Mal Código
let d; // Este tipo de nombres no ofrecen ningún tipo de información sobre su uso.
let ac;
let d12;
let theList; // Este nombre es muy genérico, también colocar el tipo (List) en el nombre puede llevar a confusiones.
const M;
// Código Limpio
let remainingDate;
let userAccountInformation;
let userAccounts;
const HTTP_METHODS;
```

Evitar nombres con variaciones mínimas, estos nombres agregan ruido al momento de realizar una búsqueda de alguna clase especifica, método, o variable.

```ts
/** 
 * Ambos nombres son parecidos pero no iguales, esto puede generar confusión 
 * para el desarrollador 
**/
export default class XYZControllerForEfficientHandlingOfStrings {
    ...
}
export default class XYZControllerForEfficientStorageOfStrings {
    ...
}
```

Usar nombres que se puedan buscar y que sean fáciles de pronunciar. 

```ts
// variables
let accounts;
let accountsInformation;
let billingAccount;
let mailingRecipients;

// functions
printBillingInformation() {
    ...
}

addNewCustomer() {
    ...
}
```
Cuando nombramos funciones el método debe revelar su implementación, no debería ser necesario revisar todo el método si el nombre esta bien escrito

Evite usar codificaciones en los nombres, de por si un desarrollador revisara código de otras personas, agregar una codificación adicional solo retrasara al desarrollador, un ejemplo, una empresa "X" utiliza A01254 para identificar a un tipo de clases que están relacionadas con una sección de reportes de las actividades de los usuarios y A01253 para la información almacenada de los usuarios, todas las clases relacionadas a este sistema se nombran de la siguiente manera *A01254-controller o A01253-controller*, para entender a que modulo pertenece cada clase la empresa brinda un diccionario de los códigos, En lugar de ello es mucho mas fácil de entender y mas rápido de encontrar, cuando se utiliza *ReportUserController ReportUserInformationController.*

## Funciones

### Funciones cortas

Al momento de escribir las funciones debemos evitar escribir funciones que tengan muchas lineas de código, al ser muy extensas las funciones dificultan la lectura de la aplicación, al mismo tiempo que es posible que agreguen lógica innecesaria dentro de las funciones.

La longitud ideal de una función seria menor a 20 lineas, si necesitamos mas lineas dentro de la función es posible que necesitemos hacer una refactorización.


### Nombres con Sentido

El nombre de las funciones debe dar una pista de la implementación de la función.

Aquí terminamos esta primera parte de código limpio, en artículos posteriores veremos algunos ejemplos mas de como mejorar nuestro código.

Si gustan buscar mas información sobre como escribir código limpio les recomiendo el libro *"Clean Code: A handbook of Agile Software Craftsmanship"* the Robert C. Martin

Adiós!

**Compártelo en tus redes Sociales!**