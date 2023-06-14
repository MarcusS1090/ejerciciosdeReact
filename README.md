CURSO REACT 2023
SECCION 1:
¿Qué es React?
React es una biblioteca de JavaScript para construir interfaces de usuario, React es declarativo, es decir, React te ayuda a crear interfaces de usuario interactivas de forma sencilla, Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.

Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, más fácil de depurar, también nos ayuda a solo escribirlo una vez y pasarlo a cualquier parte de nuestro código.

Basado en componentes:

Crea componentes encapsulados que manejan su propio estado, y convertirlos en interfaces de usuario complejas.

Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM


Vamos a ver la diferencia entre vanilla JavaScript y ReactJs.

![vanilla button](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/769c22d8-f6e7-420f-a211-9332ab1738e4)
Aquí creamos un button con vanilla JavaScript que cuando lo pulsamos haga un cambio en su estado cuando lo pulsemos, aquí podemos observar la cantidad de código que debemos ingresarle para que nos pueda dar el cambio de estado, esto sucede porque JavaScript solo (vanilla) lo estamos dando como un código imperativo esto significa que le estamos diciendo el como lo tiene que hacer

React SIN JSX:
![con react sin jsx](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/0fce12d3-3b07-4383-bdd0-4d112ee39f36)
Aquí tenemos un ejemplo de cómo haríamos lo mismo que en la imagen anterior pero esta vez con ReactJs, aunque parezca que tiene igual o más complejidad que en vanilla esto es así porque no estamos usando JSX, pero en si con ReactJs haremos nuestro código declarativo esto quiere decir que vamos a describir que es lo que queremos que el haga.

¿Qué es JSX?

JSX es una extensión de sintaxis para JavaScript que permite escribir marcas similares a HTML dentro de un archivo JavaScript o TypeScript. Aunque hay otras formas de escribir componentes, aunque lo mejor a la hora de usar ReactJs es usar la concisión de JSX.

Tenemos distintas formas de transformar el JavaScript a JSX, esta es una de las herramientas que usan por debajo para transcribir JavaScript a JSX, son BABEL y SWC estos son usados en empaquetadores como WebPack o NodeJS

Expresiones en JSX:

Puedes agregar expresiones, por ejemplo:

![JSX EXPRECIONES](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/9095670f-0621-4385-a91a-2bdf2e6c598e)
En la segunda línea vemos que entre llaves( {} ) podemos agregar una expresión poniendo la constante entre llaves (línea 1), cuando ponemos entre llaves sea una constante o una variable let, le estamos diciendo que evalúes esta expresión, OJO ENTRE LLAVES SOLO PUEDES PONER EXPRESIONES, NO DECLARACIONES.

Especificar atributos:
Aquí podemos especificar atributos como lo haríamos con HTML, como React es JavaScript tenemos que especificar el atributo en camelCase como lo hacemos en JavaScript aquí el ejemplo de una forma de especificar atributos

![especficiar atributos](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/e7bc64ee-eaab-4569-9e0a-b06e78d308c5)

JSX TAMBIEN EVITA LA INYECCION DE CODIGO:

Alguien puede intentar inyectar código, por ejemplo, con información que le está dando el usuario, pero con React y más específico con JSX si intentas renderizar la respuesta(response) como children como una cadena de texto, se queda como cadena de texto. 

![como reacciona a la inyeccion de codigo](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/1d31ef2b-0baa-45a1-a146-0b690a8737d1)
Aquí podemos ver a la izquierda como tratamos de inyectarle código en una respuesta, y al lado derecho vemos que sucede cuando React detecta esto y vemos que solo lo va a renderizar como una cadena de texto.

JSX: Poniendo marcado dentro de JavaScript:
La web se ha construido sobre HTML, CSS y JavaScript. Durante años, los desarrolladores web mantuvieron el contenido HTML, el diseño en CSS y la lógica en JavaScript, a menudo en archivos separados, El contenido se marcó dentro del HTML mientras que la lógica de la página vive por separado en un archivo JavaScript, en las siguientes imágenes simplificaremos lo que decimos.

![html](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/7effa4f9-15e7-4668-883d-b20aa338198e)

Empaquetador de aplicaciones:

Podemos usar distintos empaquetadores de aplicaciones, la oficial de ReactJs es Create-React-App y esta usa Web Pack, el inconveniente con este método es que, es una app muy lenta, se ha quedado desactualizada y a la fecha de hoy (5 de junio del 2023) ha quedado casi olvida de forma oficial por React.

En cambio, tenemos una alternativa como vite, WMR, Snowpack, y otras más, en este caso vamos a usar vite, porque está bien optimizado y es mucho más versátil a la hora de trabajar.

VITE:
Vite como vimos anteriormente es un empaquetador de aplicaciones la cual es compatible, no solo con React, sino también con vanilla JavaScript, con VueJs, Angular, Svelte.

Como crear una aplicación de Vite:
podemos ir a la página de la documentación de vite: https://vitejs.dev/guide/ para poder ver el paso a paso, de igual manera pondremos las imágenes de referencia para hacerlo,

primero tendremos que dirigirnos a la carpeta donde vamos a crear nuestra app lo podemos hacer desde la consola (lo cual es lo recomendable) o desde nuestro compilador de código que en este caso es Vs Code y abrir la ubicación de la carpeta, una vez hacemos eso hacemos lo siguiente, tiene que tener instalado NodeJS:

1. Esto nos creara una app de vite con NodeJS.

![npm create vite](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/688d3a0b-4cb3-4465-8f35-aa47fc3486ab)

2.luego le tendremos que dar un nombre.

![nombre de vite app](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/4ce1672f-d832-4bdc-a170-203a22c221de)

3.luego tendremos que escoger que framework deseamos elegir para nuestro proyecto, en este caso usaremos React, pero vite nos deja usar cualquier otro framework e incluso vanilla JavaScript.

![escoger el framework](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/128cf29b-94bc-4bcd-925d-6145093acefd)

4. luego de ello, tendremos que escoger que lenguaje vamos a usar, podemos usar JavaScript o typeScript y también en sus versiones con SWC, SWC es un transpilador como BABEL, pero es mucho más rápido porque está hecho con Rust, esto lo vimos en la parte del JSX, siempre vamos a usar SWC.

![seleccione el lenguaje](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/19ef444a-9732-4c3e-bffd-b41f26f93bad)

5. Luego de crear nuestro proyecto nos dirá que debemos hacer enseguida.

![siguientes paso](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/a80d1680-fe30-43d9-a248-f14e6aebbfcb)

6. luego de hacer npm install, al escribir npm run dev, nos dice que se creó un servidor local y que si queremos podemos hacer un host network.

![luego de npm install](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/e678bd7f-57d3-4fc6-91cd-8a1650c914bb)

EMPEZANDO CON NUESTRA APP:

1.	Vamos a ver la interfaz de nuestra app en VS Code:

![interfaz de la app](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/4aae0360-5a7a-48e7-9298-17f0987dd58b)
Aquí vemos en la parte derecha las carpetas que se nos han creado en la app tales como node_modules, public, src, archivos. gitignore, etc.

2.	vamos a ver que tiene cada archivo, el package. Json nos guarda todo lo que son dependencias y scripts.

![package json](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/6148a5b5-cb8d-4472-97cc-575395c913cf)
Asi se ve nuestro archivo Json.

3.	Aquí vamos a ver lo que tiene el índex, que es lo que nos va mostrar la interfaz en el navegador.

![el index](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/65ad6c36-0875-4ddd-b1b3-41a1bbffe885)
Por ejemplo, en el body vemos que está renderizando un elemento div con un id root que es lo mismo que vimos en los primeros pasos, luego con una etiqueta script vemos que nos dice que es un type=” module” y el src=” /src/main.jsx” nos dice que está trayendo un archivo jsx para mostrarlo desde nuestra carpeta src.

4.	Aquí entramos a nuestra carpeta src y vamos a ver los diferentes componentes que trae por defecto (porque vamos a borrar algunas cosas más adelante), dentro de la carpeta src tenemos un archivo muy importante como es el main.jsx, que es donde vamos a renderizar nuestro componente app.

![archivo main](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/0320786d-ed73-4072-b6b4-dca7c103123e)
Vamos a desglosar la imagen anterior, Tenemos en la primera línea una importación de React from ‘react’ en esta línea importamos la paqueteria de react para poder usar los componentes y funciones que nos ofrece react.

![liena 1](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/c6405f8e-bff3-4bde-b5a8-be1da7e0640a)

Tenemos en la segunda línea una importación de ReactDoom, esto nos deja renderizar nuestros componentes de React en el cliente (en el navegador).

![liena 2](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/ecd1c852-f9fa-41b9-9d8c-96a69e5c6cda)

Tenemos en la tercera línea un componente APP.

![liena 3](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/effc907b-9d27-42a7-96b4-6ec727c2e939)

Y aquí estamos importando los estilos.

![linea 4](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/794a3b21-9836-4bcb-b416-4781121f32d1)

Aquí tenemos el elemento HTML donde queremos crear nuestra aplicación, también tenemos por un lado el StricMode que es algo de react, con esto nos ayuda a encontrar bugs ya que renderiza en tiempo extra lo que nosotros pongamos dentro de esta etiqueta.

![linea 6-10](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/c1030f29-d167-49b8-b259-5070510c7d35)

COMPONENTES DE REACT:
En este apartado vamos a ver algunos componentes de React:

¿Qué es un componente?
Un componente es una función que lo que hace es crear un elemento.

<Fragment> (<>…</>):
Envolver elementos en el componente <Fragment> para agruparlos en las que necesite un solo elemento. Agrupar elementos en Fragment no tiene efecto en el DOM resultante; es lo mismo que si los elementos no estuvieran agrupados. La etiqueta JSX vacía <></> es una abreviatura de <Fragment></Fragment> en la mayoría de los casos.

aquí vemos como usamos el Fragment de manera abreviada:
  
  ![fragment](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/c21e550a-2269-46d4-bb4e-e4a74f7f13fa)
  
Aquí vemos la forma de usar Fragment, pero aquí hay un problema ya que si queremos que esto tenga más elementos tendríamos un problema porque habría mucho texto y mucho código para cada botón como en el siguiente ejemplo:
  
![button con svg](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/d3b8aae2-955f-4bfa-9998-be751e877b8a)
  
Aquí tenemos un svg que tiene mucho texto y lo queremos pasar a todos nuestros botones, pero hacerlo uno por uno en los botones es tedioso, complicado y muy poco entendible.
en cambio, gracias a los componentes podemos hacer lo siguiente para poder simplificarlo.

![funcion de button svg](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/ff02903f-bef1-45c0-84b2-7c8f2583b5bf)
  
Aquí vemos que creamos una función createButton para retornarle a nuestro button los parámetros que queremos que tenga.
  
![pasando parametros text al button](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/79c556f3-116b-44bf-9f57-960492586e37)
  
Aquí vemos que renderizamos nuestra función createButton y gracias al Fragment podemos tenerlo las veces que deseemos.

Entonces si queremos hacer más cambios por ejemplo le queremos cambiar el texto entonces debemos hacer lo siguiente:
  
![parametro nombrado del button](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/a21bf27c-6a8f-454d-ac3e-b1c7bb982c33)
  
Aquí le estamos pasando un parámetro nombrado que es text, y esto lo reemplazamos en donde teníamos nuestro hola mundo con el parámetro nombrado {text}.

ahora si le pasamos los cambios no pasara nada porque no le he dado ningún uso al parámetro, para pasarle los parámetros lo haremos de esta manera.
  
![pasando parametros text al button](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/7ab080df-5254-4d97-9674-d1ae0ab401f9)
  
Aquí vemos como debemos asignar los parámetros a nuestros componentes para ser renderizados en el Fragment, pero esto está mal hecho porque esto es imperativo, no declarativo.
  
En react cuando queremos crear una función que tiene que devolver un elemento lo tenemos que hacer de otra forma, en react existe el concepto de componentes el cual ya explicamos más arriba, para ello necesitamos crear un componente.

Entonces aquí mostraremos como hacerlo:
  
![como pasar parametros de manera correcta](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/d4065852-daf6-4ba5-bbad-fdc85a57482a)
  
Entonces para hacer que nuestra función sea declarativa debemos hacer lo siguiente, en nuestra función Button le cambiamos el nombre a Button en mayúsculas porque en estos casos tiene que ser escrita en Pascal Case, luego le pasamos el parámetro, nos sale una advertencia porque nos dice que los componentes para hacerlos más rápidos y optimizados debemos tenerlos en archivos separados, luego de escribir nuestra función y lo que va a hacer, en el render le pasamos la función Button y el parámetro se lo ponemos como si fuese un atributo, en lugar de crear funciones creamos componentes y asi podremos reutilizarlos en donde lo necesitemos.

Ejercicio UI Twitter:

En el próximo ejercicio vamos a crear un componente como en Twitter de a quien seguir asi aprenderemos lo visual, estilos, como poner props para que cambie la información y luego vamos a ponerle un botón que cambie de estado cuando le damos click y cómo hacerlo de forma declarativa.

Pasos a seguir:

1.	Para no enredarnos y que sea mucho más armónico y buena práctica crearemos un archivo llamado App.Jsx en nuestra carpeta src, este archivo tiene una extensión jsx por que le estamos diciendo que en este archivo vamos a usar jsx:
  
![usar app jsx ssssssss](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/582b1769-2043-4ca3-a303-885eb3e1e463)

2.	Una vez creado el archivo lo próximo que haremos es una función de flecha y la exportaremos para poder renderizarla en el main.jsx
  
![renderizando main](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/0af9789f-e2f6-45b8-8a21-165d17bfece3)

3.	Luego vamos a ir a nuestro archivo main y vamos a importar nuestro archivo app para renderizarlo usarlo como componente.
  
![importando app](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/5c9d4292-a636-45af-b33b-070195d7eb80)
  
Esta es una de las maneras en la cual podemos renderizarlo.

4.	Ahora vamos a darle estilos a nuestra Twitter Card, entonces necesitamos saber que información necesita:
  1.	Imagen
  2.	Nombre
  3.	Nombre de usuario
  4.	Y el botón

5. entonces vamos a nuestro archivo app y vamos a envolverlo todo en una etiqueta article y luego en un header que tendrá una etiqueta img, luego de ello con un div lo separamos y escribimos el nombre y el nombre de usuario y después del header hacemos un aside y ahí pondremos un button que nos dirá que sigamos.
  
![haciendo la estructura de los elementos](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/3de25b1b-d0ac-4729-9f94-9ec6a9e4d45d)
 
Estilos de react:
Podemos hacer los estilos de react de dos formas diferentes, directamente en las etiquetas, pero estos no se ponen en línea, porque la propiedad style espera que sea un objeto y no una cadena de texto, pero esta forma no es correcta ni la más cómoda, pero si una forma de añadir estilos únicos a esos componentes y añadir estilos en react Native,

La otra forma es crear un nuevo fichero donde hagamos los estilos, entonces proseguiremos con nuestra Twitter Card usando este método.
  
  ![creando un nuevo fichero de estilos](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/96ca5931-6552-4ec1-b047-7eff4c1a32c1)

Aquí creamos dos archivos de estilos, uno para el Main y otro para el App, luego dentro de App que es el archivo donde pondremos nuestros estilos para el Twitter Card pondremos nuestros css  

![estilando articles](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/6b6a349d-2038-4214-9a9d-33444d40aa05)

No olvidemos importar nuestro css, este App.css lo importaremos dentro de App. Jsx
  
![importando app](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/8722b367-e357-4d88-84cf-28b3a88d47f7)

Ojo que esta sea la forma de importar los estilos, no significa que esta sea la manera predeterminada de importar todo
Y ya teniendo esto ya tenemos nuestro componente bien estilado y bien resuelto
  
![ya con estilos primera parte](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/c6b4e1f3-6551-43bb-82da-b4cfe1921b8c)

 Esto es como se verá nuestro componente con estilos, pero ahora tenemos un inconveniente porque si más adelante tenemos otro componente article y nosotros hicimos el estilo como lo hacemos en css entonces también lo va a estilar, como solucionamos esto, lo solucionaremos poniendo clases como className, porque esto porque el jsx se convierte en JavaScript ya que class es una palabra reservada y por defecto en react debemos decirle que es className, entonces una buena forma para que estilar este componente único es darle un className a la hora de hacerlo y asi esos estilos solo quedaran para ese componente, vamos a hacerlo a continuación. 
  
![function app](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/13ec6a3d-0b88-45e4-87d6-b8520d3262a3)
  
Lo primero que haremos es darle unos className a las etiquetas que queremos darle estilos, luego de hacerlo vamos a nuestro css y vamos a aplicar los className.

Esta no es la única forma que tenemos para hacer estilos, también lo podemos hacer modular, lo cual lo hace mucho más versátil, compacto y ágil a la hora de hacer nuestros componentes, tenemos taillwind, y muchos más para ello

 ![haciendo los estilos para twitter follow card](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/3e27be2f-9e60-4d72-9ed0-69e58c6bfbaf)

Bien ahora vamos a aplicar los estilos que teníamos hechos, pero ahora lo aplicaremos a nuestros className para hacer esto, primero ponemos un . para decirle que está referenciando un className.

 ![estilos de la tarjeta twitter 1](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/75b40450-9c98-4c92-a5a1-9316c2034dca)

Aquí vemos como se ve igual que cuando lo hicimos sin etiquetas.

Bien ya vimos como estilizar nuestros componentes y nuestras cosas, pero ahora tenemos un inconveniente que esto no lo podremos reutilizar, por que entonces tendremos que hacer diferentes propiedades y también estilizar esas propiedades, la magia de React, la base de react son las propiedades y en este ejemplo no podemos reutilizar las propiedades, pero lo vamos a hacer a continuación.

 ![haciendo diferentes propiedades para reutilizarlo](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/c630dc33-fbac-474c-8db2-db804470de14)

Bien lo primero que haremos es crear un nuevo archivo jsx en la carpeta src, este archivo lo llamaremos TwitterFollowCard, para poder reusar nuestros componentes lo mejor es crearlos por aparte del archivo app.

![function twtiterr followCard](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/61083af6-c921-4057-a43b-19dc02548668)
 
Ya una vez creado creamos una función con el Nombre del archivo y pasamos lo que teníamos en app a este nuevo componente, pero ahora tenemos cosas diferentes tal como parámetros ({userName, name}) y en cambio de tener directamente el nombre le pasamos los parámetros en los para que nos evalué si le estamos pasando algún parámetro o no.

Bien ahora vamos a explicar por que estamos haciendo esto de esta manera, pasando parámetros, es bastante simple, para poder reutilizarlo, porque puede que tengamos una base de datos y queremos que haga un ramdon en el Twitter follow card y no podemos pasarle siempre los mismos valores, entonces para ello le pasamos como parámetros los valores que queremos que evalué para que después estos sean ingresados en otro componente, en el src estamos haciendo en comillas literales por que esta es la forma correcta que tiene react para evaluar una función, sino lo hacemos asi nos arrojara un error o simplemente lo tomara como un string

 ![importando en App](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/2f2f8a84-e118-4022-ac10-d7a222740aff)
  
Ahora asi es como se vera nuestro archivo App.Jsx, esto quiere decir que solo estamos importando el componente para poderlo usar en app y en el main.jsx hacemos el render de app, asi que todos los componentes lo vamos a pasar a nuestra App.Jsx y a su vez main.jsx renderiza todo lo que es App.Jsx

 ![ya con estilos primera parte](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/7a023909-5ac0-4494-aec0-b36681a7e4c3)

Asi se verá nuestra follow card sin pasarle los parámetros, pero esto es completamente normal por que para pasarle los parámetros tenemos que hacerlo en App.Jsx.

![pasandole los parametros a la twitterFollowCard](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/4dbb09aa-4455-430b-9fa7-3f6d33d65300)
 
Y aquí, recordemos que usamos el React. Fragment para poder usar dos o mas del mismo componente, esta vez estamos usando las direccionales vacías porque es otra forma de hacer la sintaxis y además lo hace más legible, más limpio y más simple, y para pasar los parámetros lo hacemos como si lo hiciéramos con una etiqueta, lo podemos hacer con strings como lo vemos acá o también como una evaluación.

 ![viendo nuestro twiter followcard](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/1fc2f88e-34f1-4f35-9313-4b9c1915e9de)

Y asi se vería nuestra Twitter card, pero aun nos falta más cosas por hacer como cambiar el estado del botón seguir y otras pequeñas cosas que veremos que nos ayudara.

Bien ya que tenemos nuestro card vemos que tenemos problemas con nuestros estilos, que el botón están muy cerca y otros detalles, vamos a arreglarlo


    
Bien entonces en vez de tener un react Fragment también podemos contener nuestro componente en un div, un section un nav, etc, en este caso vamos a usar un section y le vamos a dar un className para solo este section ya que solo necesitamos usarlo en este caso solo para este componente por que puede pasar que necesitemos el componente en otra parte, los estilos también se aplicarían a este.

 
Ahora creamos nuestros estilos aparte para nuestro componente y ahora estos estilos solo se aplicarán a nuestro section con un className= ‘App’ y asi ya tenemos un componente propio, miremos como queda.



 
Y asi es como se vería nuestro componente con sus nuevos estilos, pero aun nos falta algo, nos falta otro parámetro por aplicar y es el parámetro de isFollowing, pero como esto es un booleano vamos a aprender como pasarlo a nuestro componente, pero esto es muy sencillo.

 
Aquí vemos como pasarle un booleano a nuestro componente, cuando lo pasamos asi normalmente lo toma como un true y si necesitamos que sea un false pues lo pasamos como una evaluación, pero esto no es dinámico, pero por ahora lo dejaremos asi, ya que si notaste anteriormente falta el @ en el userName vamos a ver cómo hacerlo pasándole funciones.

 
Bien ahora le pasamos a nuestra función un formatUserName y en donde teníamos userName ahora ponemos el formatUserName y el userName como una función, si en react también puedes pasarle funciones, ahora vamos a nuestra App.Jsx para ver como pasamos esta función.

 
Bien ahora creamos una funcion y la llamaremos en este caso format y le vamos a pasar los siguientes parámetros, luego en el return le pasamos el formatUserName la funcion que tenemos en app y asi ya tendremos el @ en nuestro render
              
Y asi vemos como pasarle funciones como props y no solo podemos pasar funciones, sino que también le podemos pasar elementos, vimos una forma de pasarle funciones, pero para algunos nos puede parecer una forma muy tediosa de hacerlo, vamos a ver como lo podemos mejorar con los elementos.

 
Aquí tenemos en formattedUserName le estamos pasando un elemento como props en app y luego vamos a ver en nuestro archivo Twitter card vamos a pasarle el formattedUserName para que lo evalué, en este caso le pasamos el elemento como marcusS1090 y lo haremos sin las llaves para explicar la diferencia entre un elemento y 
 
Aquí vemos lo que decíamos anteriormente, por que pasa esto, esto sucede por que en Twitter card le estamos diciendo que evalué el formattedUserName y en el App.Jsx le estamos diciendo que formattedUserName tiene un elemento para pasarlo como props.

Bien ahora vamos a ver cual es la diferencia entre elemento y componente, pues lo podríamos decir que un componente es una factoría de elementos, es decir que es una funcion que al ejecutarla te devuelve un elemento y el elemento es lo que renderiza react.

Props especial children:
Teniendo de ejemplo en la imagen anterior vemos que el elemento button está envolviendo un texto button (seguir) con el elemento button, pero también tenemos ese aside envolviendo el elemento button que a la vez envuelve el texto, esto se le denomina children, esto también se puede ver a nivel de componentes por ejemplo puedes quitar el name y envolverlo en con el componente.




 
Como lo decíamos anteriormente esta es la manera en la que podemos envolver con un componente un children, pero si vamos a ver no nos renderizara nada por que tenemos que decirle que es un parámetro children

 
Aquí ponemos como parámetro el children y como ya no necesitamos el name, entonces lo eliminamos.

 
Y aquí reemplazaremos el name con el children.

Pero el children no solo le puedes pasar este tipo de elementos, aquí puedes tener casi cualquier cosa, elementos, componentes, etc.

Cuando debemos utilizar cada cosa, bueno es situacional, depende de como quieres hacer la interfaz de usuario.

Pasar objectos como props:
También podemos pasar objectos como props, en caso que estas sean muchas propiedades o necesites pasarlo de golpe o no necesites que sea responsive, vamos a ver cómo hacerlo.

 
Entonces lo primero que haremos es crear un objeto donde este tendrá los parámetros para después pasarlos a los componentes ahora vamos a ver como lo pasamos a nuestros componentes.


 
Bien esta es la forma en la que le pasaremos los objetos a nuestros componentes, abrimos llaves tres puntos y escribimos el nombre del objeto que esta almacenado en una constante y esto lo que va a hacer es pasar todas las propiedades del componente como props. 

Vamos a explicar porque esto debe ser asi {…marcusS1090} esto es el rest operator esto quiere decir que el rest operator le esta diciendo pásale cada una de las propiedades de este objeto como una prop para nuestro componente TwitterFollowCard, esto es en su mayoría mala práctica y esto porque, primero estas enviando mucha información que a veces no es necesaria, segundo esto puede que haga por el componente por temas de renderización renderice o prerenderice sin necesidad y tercer esto puede hacer mas complejo de entender que información le está llegando al componente.

Bueno ahora vamos a ver el funcionamiento del botón y esto lo veremos como final de esta sección con los state
 
States en React:
los estados son como un interruptor que puede estar encendido o apagado, también puede ser un poco mas complejo como decir que se apague a los tantos segundos, el punto es que los estados nos ayudan a manejar nuestra UI de manera distinta como por ejemplo renderizar un componente antes que otro, entonces siguiendo el ejemplo con nuestra twitterCard vamos a ver como hacer que nuestro botón cambie de estado cuando le damos clic.

Bien vamos a hacer un pequeño ejemplo para ello, para ello necesitamos cambiar nuestros estilos para cuando diga que lo estamos siguiendo, para cambiar los estilos vamos a hacer un pequeño ejemplo con una ternaria.

 
Haciendo esta ternaria que es como un if pero mas simple, le decimos que si isFollowing es true entonces que cambie el text a siguiendo sino entonces que diga seguir

      
Aquí cambiamos el texto seguir que teníamos anteriormente a uno responsive entre comillas.




 
Y esta es la respuesta que nos arrojara, no está  mal, pero esto es estático y nosotros por lo general lo queremos responsive.

Bien ahora yo quiero que el botón haga algún cambio no solo en su texto si yo le doy seguir, vamos a ver como lo aplicamos cambiando los estilos pero de una forma ternaria.

 
Bien aquí hacemos una ternaria que nos diga si isFollowing es verdadero entonces además de tener los estilos que poseía normalmente, también va a aplicar otros estilos que haremos a continuación, si es falso entonces que tenga los estilos igual, bien, vamos a aplicar los estilos.
 
 
Bien estos son nuestros estilo.
 
Asi es como se vería nuestro botón estilizado, pero aun nos falta lo esencial, que cambie de estado el botón, vamos a ver algunos métodos para hacerlo.

 
Lo primero que debemos hacer en react es importar los hooks, esta es la magia de la vida en react, los hooks lo que te permite es añadir cierta funcionalidad a los componentes de react o poder ejecutar código arbitrario como ocurren ciertas cosas en tus componentes o tener algún tipo de funcionalidad para mejorar el rendimiento de tus componentes

useState:
En este caso el useState nos va a servir para poder guardar una variable que nos diga si estamos o no estamos siguiendo a ese usuario, vamos a ver como la usamos

 
Lo primero que haremos es guardar en una variable el estado inicial en este caso el estado inicial es false (tratemos de escribir bien false), esto quiere decir que no estamos siguiendo a nadie, en el state nos devuelve un array de dos posiciones vamos a ver por qué esto es asi.



     
Bien aquí tenemos nuestro array de dos posiciones pero lo tenemos almacenados en diferentes variables, en la primera posición tenemos el valor del estado, el cual sabemos que es false, y en la segunda posición lo que tenemos es una funcion que nos va permitir actualizar el estado.
Poniendo un ejemplo en contexto, podríamos decir que en la primera posición sabremos si tenemos la luz apagada o prendida en una habitación y en la segunda posición el interruptor que nos permitiría cambiar.

Pero esta forma de escribirlo lo hace muy tedioso por que lo estamos haciendo en tres líneas de código, por suerte JavaScript tiene una forma mas sencilla de hacerlo y esto lo hacemos con la destructuracion, vamos a ver como se hace

 
Aquí podemos ver un ejemplo, en la primera línea como se hace de forma destructurada y en las líneas comentadas como lo hicimos anteriormente, obviamente la línea de arriba se entiendo mucho mejor y es mucho mas practico.








Ahora que ya estamos usando el isFollowing entonces necesitamos usar el estado y este estado lo vamos a usar en el botón, pero no lo vamos a hacer como lo hacemos en JavaScript, lo haremos de forma declarativa.

 
Aquí le damos una propiedad onClick y esto que hicimos aquí es dejarlo vacio,para que no nos de error al renderizarse, pero vamos a hacer un handler para no dejarla vacía.

 
Y vamos implementar esta funcion del botón con una arrow function y le diremos que el setIsfollowing sea diferente al estado original que le dimos más arriba (que es false) y si es true pues que le de la vuelta, asi ya tenemos una forma de hacer nuestro botón cambie de estado.

Muy buen trabajo, ¿pero notaste algo? Estos estados están separados, ósea que si le das seguir a uno los otros quedan igual, ¿por qué pasa esto? Bueno esto en react se le conoce como estado interno por que esta a nivel de cada uno de los elementos que crea el componente, no esta compartido entre elementos, ósea puedes seguir a Marcus Senju, pero esto no hace que sigas a los demás.

Gracias a esto podemos hacer un código mucho mas limpio, ágil y más fácil de leer de forma declarativa que si lo hiciéramos con JavaScript puro que seria de forma imperativa y todo esto es gracias al virtual DOM
 
Virtual DOM:
Según la Web de react el DOM virtual es una representación estructurada en forma de árbol de todos los elementos HTML de una página web, cada vez que se realiza un cambio en el estado de una aplicación web, el navegador debe actualizar y volver a representar el DOM, lo que puede ser un proceso costos en términos de rendimiento.

En palabras más fáciles de entender el DOM virtual nos sirve para por ejemplo en el Twitter card si le damos el botón de seguir este cambiara de estado, con react el dom no debe cambiar todo, sino que solo cambiara ese estado y el resto lo dejara igual, esto nos ayuda a tener mucho mejor rendimiento en nuestros proyectos.

Bien una vez tenemos nuestras funciones principales hechas, vamos a ponerle un poco mas bonito y hacerlo muy parecido a Twitter, vamos a ver como lo haremos con exactamente lo mismo que aprendimos.


Bien lo primero que haremos es crear una etiqueta <span></span> dentro de nuestra etiqueta button después del {text} y le damos un className.

 
Algo como esto, luego de esto vamos a nuestros estilos y vamos a crear nuestros estilos para que nos quede exactamente igual que en Twitter.






 
Esta es una sección de lo que hicimos y rehicimos de nuestros estilos y ya lo tenemos cada que hacemos hover sobre el botón de siguiendo nos aparece dejar de seguir, ahora vamos a algo importante que son el renderizado de listas.








Renderizado de listas:
El renderizado de listas es una forma de iterar un array de elementos y renderizar elementos de React usando JavaScript para cada uno de ellos. Para hacer un renderizado de listas en React se usa el método map de los arrays. Con este método se pueden renderizar listas completas sin importar cuantos elementos contenga con pocas líneas de código. Además, no es necesario conocer el numero de elementos que contiene la lista.

En palabras menos técnicas, normalmente la información que nos viene es un array con elementos y con este array de elementos tenemos que renderizar esto, cuando hagamos un fetch a un api o cuando hagamos diversas cosas lo que vamos a necesitar es renderizar una lista de elementos igual que en nuestro Twitter followCard, vamos a ver como lo haremos.

  
bien como vemos acá tenemos un array de elementos donde tenemos todos nuestros elementos bien guardados y los vamos a renderizar, pero hay un problema, no podemos tener los componentes ya hechos entonces para renderizar nuestro array con el componente TwitterFollowCard bien ahora vamos a ver como lo haremos y lo haremos como lo hacemos en JavaScript.
  
Bien aquí tenemos como renderizamos nuestra lista en nuestro componente TwitterFollowCard, lo ponemos entre llaves por que le estamos diciendo que nos evalué lo que esta dentro de llaves, luego hacemos un map para cada usuario y extraemos la información y el return que esta dentro de la llave y ponemos nuestro componente y dentro nuestra etiqueta de abertura ponemos los parámetros y dentro de los parámetros la información de nuestro array.


















 
da un error porque en React siempre nos pedirá un prop key para nuestros elementos, ¿Qué es la key? Bueno la key es un identificador único para ese elemento, porque react necesita saber a qué elemento exactamente me estoy refiriendo de este array ya que react utiliza el DOM virtual, entonces con el key identifica que elemento sea único para ello y en este caso concreto usaremos el userName, recuerda que tiene que ser un valor único lo mejor para esto es crear un id único para ello, pero casi siempre en las peticiones fetch a un api vienen con el id.

Entonces este será nuestro final de la primera parte del curso de React, en la próxima sección haremos un pequeño videojuego para aprender mas sobre react.
 
Sección 2:

  
  
  
  
  
