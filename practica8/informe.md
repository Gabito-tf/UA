#---Informe FireBase ---

[firebase][https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/fire.png]

### Registro

Firebase se usa en línea, es decir, no hay que descargar nada en nuestra web, simplemente incrustrar el código que ellos nos proporcionan ellos.
Una vez registrado y dentro del proyecto le damos click a la ruedita de ajustes y entramos en la pestaña de “Configuracion del proyecto”, una vez dentro bajamos hasta encontrar el código que conecta Firebase con nuestra web.

[]

Base de datos

Posteriormente creamos una base de datos para nuestro proyecto. Para esto primero entramos a Database en el menú principal y creamos una base de datos, en nuestro caso la hemos llamado “bdt-uya”. Hay que tener mucho cuidado en activar la lectura y escritura de la base de datos ya que por defecto vienen desactivadas.
Nuestra base de datos se vería tal que así. (Se puede apreciar que está vacía ya que no hemos procedido a cargar ningún dato en ella previamente).
 

Carga de datos.

Ya que nuestra aplicación se basa en compartir coches, hemos decidido meter en la base da datos a varios alumnos de ULL, con sus respectivos coches y número de plazas de cada uno.
Para ello primero inicializamos el firebase en nuestra web, y luego accedemos a la base de datos.
 
Luego procedemos al registro de ciertos usuarios 

 

En esta imagen podemos apreciar la creacion de un elemento dentro de la base de datos en la línea 30. Y las siguientes líneas para añadir informacion descriptiva acerca del usuario.

Una vez ejecutada la página nuestra base de datos se queda de la siguiente manera:

 

Visualización en la consola.

Para probar el funcionamiento correcto de nuestra base de datos podemos añadir el siguiente código a nuestra página web, y podremos ver la base da datos en tiempo real desde la consola del navegador usado en cuestión, en este caso Chrome.

 

Por tanto así se vería en nuestra consola: 
 

