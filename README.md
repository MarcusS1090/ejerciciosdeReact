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
2. ![npm create vite](https://github.com/MarcusS1090/ejerciciosdeReact/assets/110134731/688d3a0b-4cb3-4465-8f35-aa47fc3486ab)

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
 
  
  
  
  
