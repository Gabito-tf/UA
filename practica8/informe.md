##---Informe FireBase ---

![firebase][img0]

### Registro

Firebase se usa en línea, es decir, no hay que descargar nada en nuestra web, simplemente incrustrar el código que ellos nos proporcionan ellos.
Una vez registrado y dentro del proyecto le damos click a la ruedita de ajustes y entramos en la pestaña de “Configuracion del proyecto”, una vez dentro bajamos hasta encontrar el código que conecta Firebase con nuestra web.

![img1][img1]

###Base de datos

Posteriormente creamos una base de datos para nuestro proyecto. Para esto primero entramos a Database en el menú principal y creamos una base de datos, en nuestro caso la hemos llamado “bdt-uya”. Hay que tener mucho cuidado en activar la lectura y escritura de la base de datos ya que por defecto vienen desactivadas.
Nuestra base de datos se vería tal que así. (Se puede apreciar que está vacía ya que no hemos procedido a cargar ningún dato en ella previamente).
 
![img2][img2]

###Carga de datos.

Ya que nuestra aplicación se basa en compartir coches, hemos decidido meter en la base da datos a varios alumnos de ULL, con sus respectivos coches y número de plazas de cada uno.
Para ello primero inicializamos el firebase en nuestra web, y luego accedemos a la base de datos.

![img3][img3]
 
Luego procedemos al registro de ciertos usuarios 

 ![img4][img4]

En esta imagen podemos apreciar la creacion de un elemento dentro de la base de datos en la línea 30. Y las siguientes líneas para añadir informacion descriptiva acerca del usuario.

Una vez ejecutada la página nuestra base de datos se queda de la siguiente manera:

![img5][img5] 

###Visualización en la consola.

Para probar el funcionamiento correcto de nuestra base de datos podemos añadir el siguiente código a nuestra página web, y podremos ver la base da datos en tiempo real desde la consola del navegador usado en cuestión, en este caso Chrome.

 ![img6][img6]

Por tanto así se vería en nuestra consola: 
 
![img7][img7]

[img0]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/fire.png
[img1]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img1.png
[img2]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img2.png
[img3]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img3.png
[img4]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img4.png
[img5]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img5.png
[img6]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img6.png
[img7]: https://raw.githubusercontent.com/Gabito-tf/UA/master/practica8/informe%20fotos/img7.png
