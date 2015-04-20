# React Native

Un nuevo paso The JavaScript World Domination
https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070

## Mi historia con React

Pequeña encuesta:
- Cuantos conocen react?
- Cuantos han desarrollado aplicaciones para móviles?
- Cuantos han desarrrolado aplicaciones nativas para móviles?



React está causando bastante revuelo últimamente. Por varias razones

- Siempre renderiza todo como forma de mantener todo sincronizado
- Performance
- Facebook, instagram y otros lo están utilizando en sus productos estrella
- Renderizado isomorphico (renderizado en cliente y en servidor)

Pero llevo un tiempo desarrollando con angular y para mi hasta ahora React era una tecnología que mantener en el radar, 
pero no me había decidido a empezar un proyecto con ella.


Flipboard presentó ReactCanvas. Utilizan la tecnología de react pero en vez de renderizar en un html, renderizaban directamente
en un canvas. React al final te provee una representación de arbol de un listado de componentes. Con objetos javascript.
Y un proceso que permite detectar las actualizaciones en ese árbol.
(anecdota de lo que monté en canvas?)
Aquí mi interés por react fue aumentando


Y entonces facebook presento React Native. Exactamente lo mismo, pero en vez de renderizar a Html o a Canvas. Renderizan a componentes nativos
Esto es ya hablar de palabras mayores. Esto quiero decir que puedo desarrollar una aplicación react con todas las ventajas que eso aporta 
(la principal, renderizar siempre para mantenerlo todo sincronizado) y que voy a tener una aplicación nativa. 100% nativa, utilizando componentes
del sistema operativo, con lo que eso implica, animaciones de calidad.

Mad science gif!

En la conferencia f8 liberar la librería (esa época coincidió con el ataque del gobierno chino a github, por lo que no estaba muy clara la autoría del ataque) 

https://twitter.com/floydophone/status/581343475284611072


Otra de las principales ventajas de esto es que facebook lo utiliza en sus propias aplicaciones. En la conferencia enseñaron código de la aplicación de grupos
y la aplicación de gestión de anuncios que estaban implementandas con react native.
Por lo que comentaron, pusieron a un grupo de desarrolladores sin experiencia previa en ios, y que fueron capaces de sacar una aplicaicón en mucho menos tiempo.

Por ahora han libera únicamente el código de ios, pero internamente están trabajando en integración con android también. Hay componentes especificos plataforma
y componentes genéricos que engloban que seran mulitplataforma.


Este fue el momento que dije, tengo que aprender react. Y tuve la sensación del tweet del chino:

React es bastante sencillo de aprender. Básicamente es javascript, la curva de aprendizaje es mucho menor con respecto a framework como angular que se
se inventan toda su parafernalia de $scope y todas esas mierdas (aunque bueno, parece que eso está cambiando con angular2)


Cómo funciona react native?

- Hablar del bridge de javascript que provee ios
- Batched updates
- Todo el javascript se ejecuta en segundo plano
- Componentes

En qué estado está el desarrollo de aplicaciones móbiles antes de react native

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
 
  
Let's code something
 
* Creción de un proyecto básico
* Estructura de directorios que crear
* Enseñar actualización de código en caliente, debugger (Integración con chrome dev tools)
* Instalar la aplicación en el móvil y hacer cambios en caliente en código
* Enseñar código de ejemplo (Películas o pirateship)
 
(memes: magic, explosión de la cabeza, ...) 
 
Componentes

http://react.parts/native-ios

Esta react native listo para producción?

Supongo que la respuesta es si y no. Depende mucho del tipo de aplicación que tengas planeada. Es una tecnología bastante nueva
y tiene sus bugs.


https://github.com/facebook/react-native/issues/406#event-267646782
https://github.com/facebook/react-native/issues/448

Pero también es cierto que tiene cosas de herramientas maduras. Como buenos mensajes de error:

https://twitter.com/alan_reid/status/581991588290781185

 
Tiempo de filosofar

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

