<em> Proyecto Del Amigo Secreto </em>

Proyecto/Desafio de Oracle Next Education en Allura en el que tienes que hacer la funcionalidad de una pagina (con HTML y CSS ya incorporado) en JS para escribir nombres en una lista y sortear uno. 


<em> Explicacion de la funcion "agregarAmigo"</em>

Empece creando una lista, en la que iba almacenando cada nombre escrito en el TextBox con id "amigo", despues hice un ciclo for en el que recorria el array y por cada elemento de la lista iba creando un li para que se escriba en la pagina. Al finalizar este proceso, el TextBox se limpia para poder escribir otro nombre sin la necesidad de borrar. Tambien obviamente la funcion se hace si hay algo adentro del TextBox, sino lanza un alert advirtiendo que tiene que escribir un nombre. Ademas la funcion borra el texto del nombre sorteado anteriormente si es que hay.

 Cabe aclarar que el termino TextBox estoy haciendo referencia al input type "text" con id "amigo".

<em> Explicacion de la funcion "sortearAmigo"</em>

Cree una variable en la que se almacenaba un numero random en el que empieza con 0 y termina con el numero del tamanio del array que almacena los nombres, despues creo un LI en el que su textcontext pasa a ser un nombre de la lista seleccionado con el numero aleatorio generado. Luego, borro el contenido de la lista y los li en la pagina cuando terminado el sorteo. Todo esto pasa si el tamaño de la lista es mayor a 0, sino la pagina tira un alert avisando que no hay nombres en la lista para sortear.

Quiero aclarar que los console.log que puse en ambas funcion son para demostrar en consola que las funciones andan correctamente.


"Agustin Veron Principiante en Programación G8 - ONE"