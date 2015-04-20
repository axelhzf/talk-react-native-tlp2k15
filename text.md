# React Native

Un nuevo paso The JavaScript World Domination
https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070

Encuesta:
- Cuantos conocen react?
- Cuantos han desarrollado aplicaciones para móviles?
- Cuantos han desarrrolado aplicaciones nativas para móviles?


## Mi historia con React

*React hype*

React está causando bastante revuelo últimamente. Por varias razones


*React features*

- Siempre renderiza todo como forma de mantener todo sincronizado
- Performance
- Facebook, instagram y otros lo están utilizando en sus productos estrella
- Renderizado isomorphico (renderizado en cliente y en servidor)

*Not impress*

http://electricspacekoolaid.tumblr.com/post/53709425132/okay-everybody-lets-have-a-little-lesson-today


Pero llevo desarrollando aplicaciones con angular y ninguna de esas features me había parecido suficientemente importante
como para decidirme a dar el salto. El tipo de aplicaciones con las que trabajo no necesita ese performance extra.
No necesitaba un renderizado en servidor. Y angular seguía por encima en cantidad de componentes reutilizables y 
en algunos aspecto que son más fáciles de hacer en angular.  


*Matener en el radar* 

Pero React me llamo la atención lo suficiente como para añdirla a ese listado de librerías que mantener en el radar.
Empecé a seguir en twitter a gente buena en React para estar al tanto de las novedades.

http://cdn.meme.am/instances/500x/56640665.jpg


*Pero las cosas empezaron a cambiar*

Flipboard presentó ReactCanvas. Utilizan react pero en vez de renderizar elementos del DOM, renderizan directamente
en un elemento <canvas>.

http://engineering.flipboard.com/2015/02/mobile-web/

Por qué? Performance

http://engineering.flipboard.com/assets/mobileweb/follow_btn.gif
http://engineering.flipboard.com/assets/mobileweb/topbar.gif


```js
var MyComponent = React.createClass({

  render: function () {
    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={imageStyle} src='...' />
        <Text style={textStyle}>
          Here is some text below an image.
        </Text>
      </Surface>
    );
  }
  
}
```


Podemos simplicar React a que es una tecnología que provee una representación de un arbol de componentes. Con un
algoritmo eficiente para detectar cambios en ese árbol. 
Luego ese arból de componentes podemos utilizarlo para renderizar en diferentes lugares.

Esta es una de las buenas ideas que propone react. Desacoplarse del DOM. No se si fueron conscientes de las repercusiones
que esto tendría o simplemente lo hicieron porque detectaron que el principal cuello de botella es el DOM y decidieron
minimizar la interacción con el DOM.

*Las cosas cambiaron radicalmente*

Al parecer facebook internamente estaba trababajando en algo similar a ReactCanvas para generar unas gráficas dentro
de la aplicación.

A raíz de esta idea surge React Native. Por qué no utilizar esta misma tecnología, pero en vez de renderizar en el DOM
o en elemento <canvas>, renderizan en componentes nativos de dispositivos móviles? Y así surgió la idea de React Native.
De esta forma podemos aprovechar todas las ventajas de React (la principal renderizar siempre para mantener toda la ui
sincronizada). Y vamos a tener componentes de calidad, con animaciones eficientes que son imposibles de conseguir con
html.

http://i.imgur.com/4smu7.gif
https://camo.githubusercontent.com/d4d0aff080a46a5991ed823a7fc308c36e6ee682/687474703a2f2f692e696d6775722e636f6d2f433462756f2e676966

*Publicacion de la librería*

La librería la presentaron en la React Conf de este año. Y le dieron acceso al repositorio privado a todos los asistentes.
Y en la conferencia f8 fue cuando hicieron el repositorio público

https://twitter.com/floydophone/status/581343475284611072

Esa época coincidió con el ataque del gobierno chino a github, por lo que no estaba muy clara la autoría del ataque 


*Facebook utiliza sus herramientas para sus propias aplicaciones*

Otra de las principales ventajas de esto es que facebook lo utiliza en sus propias aplicaciones. 
En la conferencia enseñaron código de la aplicación de grupos
y la aplicación de gestión de anuncios que estaban implementandas con react native.
Por lo que comentaron, pusieron a un grupo de desarrolladores sin experiencia previa en ios, y que fueron capaces de sacar una aplicaicón en mucho menos tiempo.

*Estado actual*

Por ahora han libera únicamente el código de ios, pero internamente están trabajando en integración con android también. 
Hay componentes especificos plataforma y componentes genéricos que engloban que seran mulitplataforma.

*Es la hora de aprender React!  

Este fue el momento que dije, tengo que aprender react. Y tuve la sensación del tweet del chino:

React es bastante sencillo de aprender. Básicamente es javascript, la curva de aprendizaje es mucho menor con respecto a framework como angular que se
se inventan toda su parafernalia de $scope y todas esas mierdas (aunque bueno, parece que eso está cambiando con angular2)

https://twitter.com/jongleberry/status/588590842748637184

*¿Cómo funciona react native?*

Cómo funciona react native?

- Hablar del bridge de javascript que provee ios
- Batched updates
- Todo el javascript se ejecuta en segundo plano
- Componentes


*¿Qué otras opciones existen?*

- Cordova + Ionic Framework: Aplicaciones más sencilla de desarrollar y de matener. Multiplataforma. El principal problema es la calidad de las aplicaciones
Son aplicaciones que se notan que no son nativas. Por muy potente que sea el dispostivo todavía no estamos en ese punto. Los componentes nativos tienen 
animaciones de much más calidad.

- RubyMotion o Xamarin: Son aplicaciones que son compiladas a código nativo con un runtime, de format que pueden llamar directamente a código nativo.
Son dos plataforma de pago

- iOS + Android : Desarrollar nativo tiene sus ventajas. No tienes ninguna limitaciones y tienes acceso a todas las api que proveen los frameworks. El 
principal problema son costes de desarrollo. Son frameworks complejos, necesitas a gente especialida. Normalmente equipos distintos especialidad en 
cada plataforma. Eso conlleva a problemas de duplicidad de código. Está claro que el codigo de visualización debe de ser distinto, perpo , pero todo 
el código de lógica d ela aplciación podría ser común a  las dos aplicaciones.

- React Native se situa en medio de Cordova y RubyMotion. La apróximación que utilizaron en facebook es que desde código JavaScript puedes llamar a ciertos
métodos y puedes utilizar clases nativas como componentes. Tienes la posibilidad de crear tus propios componentes y código nativo. La idea básicamente
es separar por un lado la creación de componentes nativos reutilizables de la creación de compnentes. Una aproximación muy interesante
teniendo la popularización del framework. Mucha más gente empezará a crear componentes que podremos utilizar en nuestras aplicaciones.
 
  
*Demo time*
 
* Creción de un proyecto básico
* Estructura de directorios que crear
* Enseñar actualización de código en caliente, debugger (Integración con chrome dev tools)
* Instalar la aplicación en el móvil y hacer cambios en caliente en código
* Enseñar código de ejemplo (Películas o pirateship)
 
  
*Listado de componentes*

http://react.parts/native-ios

*Production ready*

Esta react native listo para producción?

Supongo que la respuesta es si y no. Depende mucho del tipo de aplicación que tengas planeada. Es una tecnología bastante nueva
y tiene sus bugs.

https://github.com/facebook/react-native/issues/406#event-267646782
https://github.com/facebook/react-native/issues/448

Pero también es cierto que tiene cosas de herramientas maduras. Como buenos mensajes de error:

https://twitter.com/alan_reid/status/581991588290781185
 
*Conclusiones*

Vale la pena invertir tu tiempo en una tecnología desarrollada por facebook?

Es una buena pregunta. A día de hoy la sensación que tengo es qu me fio más de faceboook que de google. Facebook
utiliza sus tecnologías en sus propios productos. Google pero no en sus proyectos importantes. 

Por qué a facebook le interesa liberar este tipo de herramientas. Además de las ventajas claras del software libre. Si la comunidad
utiliza tus herramientas te ayudará a detectar y solucionar errores y a que la herramienta evoluciones por el buen camino.
También es importante el posible interes oculto que tenga facebook detrás de todo esto, que es tener a gente formada es sus propias
tecnologías:

https://twitter.com/HenrikJoreteg/status/581828092479414272

Por qué react native puede ser un auténtico gamechanger? La clave está en este tweet

https://medium.com/@clayallsopp/a-dynamic-crazy-native-mobile-future-powered-by-javascript-70f2d56b1987

