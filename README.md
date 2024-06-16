# POWERLIFTING-APP

## Contenido

- [Acerca del Proyecto](#acerca-del-proyecto) :information_source:
- [Instrucciones](#instrucciones) :page_with_curl:
- [Tecnologias](#tecnologias) :keyboard:
- [Dependencias](#dependencias) :desktop_computer:
- [Instalacion](#instalacion) 💾
- [API](#api) 🎛️
- [Versiones](#versiones) :pushpin:

***

## Acerca del Proyecto

<img align="right" alt="GIF" width="300px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHh0NWpiM3Zpc2s4NGFtbzJoajVrc2Q4c3VrNzUyNmZheGR6eTZ2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8fsqLgNJtcBEFiK0fC/giphy.gif" />
Web app para la práctica del deporte **Powerlifting** o llamado también **Levantamiento en Potencia**.
Esta aplicación que es de uso personal tiene como objetivo obtener y guardar los registros personales del usuario y considerar 
también sus levantamientos máximos en cada uno de los movimientos del Powelifting que son:

* Deadlift
* Squat
* Bench Press

Se toma en cuenta en el registro el número de repeticiones, el peso total de la barra, y la fecha y tiempo 
del momento que se esta realizando la accion.
También tiene una sección en donde se da información de lo que se trata el Powerlifting y una breve descripción de cada uno de los 3 movimientos.

**[⬆ Inicio](#contenido)**
***

## Instrucciones
Para poder usar este sistema de registro de levantamiento, sigue estos simples pasos:
* Ve a la sección de Movimientos.
* Eige una de las opciones de movimientos.
* Llena los campos de Peso, Repeticiones y confiram si es valido o no el levantamiento con el checkbox.
* Envia los datos y este te redirecciona a la página de Historial.

La página de Historial muestra todos los levantamientos registrados, cada item puedes modificar o eliminar de la misma tabla presente ahí.
Otra sección presente es el de PRs que es para mostrar los records personales del usuario, solo muestra en cada contenedor el levantamiento máximo por movimiento.

**[⬆ Inicio](#contenido)**
***

## Tecnologias
Para este proyecto se tiene trabajado con Javascript bajo el estandar de ES6 con ReactJS.
***

## Dependencias
Se utiliza la librería de React.js V17 en base a componentes funcionales, con esta libreria las dependencias que se estan utilizando son las siguientes:
* React-CountUp
* React-Redux
* React-Router-Dom
* Redux-Thunk
* ReduxJS/toolkit
* Styled-Components
* Uuid
* Material-UI/core (4.12.3)
* Material-UI/icons

**Nota:** Todos los gifs e imágenes se encuentran en directorio aseets.

**[⬆ Inicio](#contenido)**
***

## Instalacion
Para instalar en tu local el unico comando que necesitas para instalar el proyecto es el siguiente:

`>> npm install --save`

**[⬆ Inicio](#contenido)**
***

## API
Para este proyecto al menos hasta la version 1.5.4 se ha usado firebase, la estructura para la API empezando por la definicion de los movimientos es de la siguiente forma:
<pre>
"movements" --> "bench-press"
                --> body: "Pectorales"
                --> description: "El powerlifter se situará tumbado sobre el banco, apoyando todo el tronco, así como la cabeza y los glúteos. Una vez bien colocado, bajará la barra hasta el pecho y la levantará con potencia hasta dejar los brazos completamente estirados. Es importante en este ejercicio no levantar la cabeza del banco. Con esta técnica se trabajará directamente con brazos, pecho y hombros, aunque también se ven involucrados otros músculos menores."
                --> image: "nombre de la imagen"
                --> name: "Press de Banca"
            --> "deadlift"
                --> body: "Espalda/Lumbar"
                --> description: "Se realiza colocándose el levantador con las piernas un poco separadas y ligeramente flexionadas frente a la barra que se sitúa en el suelo. Para hacer este movimiento deberá inclinarse con todo el tronco hacia adelante sin arquear la espalda. En este caso, el movimiento se realiza con todo el cuerpo, no con los brazos."
                --> image: "nombre de la imagen"
                --> name: "Peso Muerto"
            --> "squat
                --> body: "Piernas"
                --> description: "Se inicia directamente de pie, con los pies separados a la altura de los hombros y la espalda recta. En este caso, la barra se sitúa tras los trapecios y se realiza una sentadilla que debe terminar con las rodillas en un ángulo de 90 grados, no debe sobrepasarse. Una vez realizada, se vuelve a la posición inicial. En este último, se trabajará con glúteos y piernas, especialmente abductores y aductores."
                --> image: "nombre de la imagenm"
                --> name: "Sentadilla"
</pre>

Para registro de cada levantamiento o ejecucion lo tenemos en nodo llamado "lifts" :
<pre>
"lifts" --> "bench-press"
                --> id --> date --> "YYYY-mm-dd" (fecha del levantamiento)
                           flag --> true/false (si levantamiento fue valido)
                           repetition -> int (numero de repeticiones)
                           time -> "HH:mm" (la hora cuando se realizó el levantamiento)
                           weight --> double/float (Peso)
</pre>

 Lo mismo se repite para nodos "deadlift" y "squat". Asi que para este proyecto es tomar en cuenta esa estructura para tener desde firebase los datos que se van agregando, editando o eliminando en https://console.firebase.google.com/.
                
**[⬆ Inicio](#contenido)**
***

## Versiones
Para el caso de las versiones con futuros cambios que consistirian en mejoras, correcciòn de errores y observaciones se definira de la siguiente manera la version del sistema:
Versión A.B.C
Donde:
 - A = Alteración considerable de la vista en la interfaz o del uso de la web-app.
 - B = Modificación, correcciones o mejoras en funcionalidades.
 - C = Pequeño ajustes con tal de que no afecte en funcionalidad.

**[⬆ Inicio](#contenido)**
***

**Ing. Oscar Rolando Gamboa A.**
