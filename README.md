# Incluir un archivo README.md en el repositorio con una breve descripción de cada ejercicio y cómo se resolvió.

----------------
Ejercicio 1.- 
----------------
Variables y tipos de datos.
    En este ejercicio se creó una variable, le di un valor y la imprimí en consola.

-----------------
Ejercicio 2.- 
-----------------
Operaciones matemáticas
    Aqui declaré 3 variables: dos para los operandos y uno para el resultado, se realizó una suma y la imprimí en consola

-------------------------------------------
Ejercicio 3.- Condicionales (if-else):
-------------------------------------------
    El objetivo es comprobar si se es mayor de edad o no, desde una ventana ingresas tu edad: si es mayor a 18 dice que SI eres mayor de edad, si es menor dice que NO e smayor de edad.

------------------------------------------
Ejercicio 4.- Bucles (for-loop):
------------------------------------------
    El problema requiere imprimir numeros del uno al diez, para ello el ciclo for es el ideal ya que con el bucle cuenta con una variable incremental, solo se necesito imprimir tal variable en consola. 

-------------------------------------------
Ejercicio 5.- Funciones básicas:
-------------------------------------------
    El objetivo es una funcion para recibir un nombre y saludar, por lo tanto con una variable que recibia un valor usando prompt() la variable se enviaba como parametro en la funcion cuando se mandaba a llamar para que dentro de la funcion dentro del console.log recibia la funcion con el nombre dado por el usuario para imprimirlo. 

--------------------------------------------
Ejercicio 6.- Manipulación de arreglos:
--------------------------------------------
    Se requiere imprimir el segundo valor de un arreglo, para esto se creo el arreglo con 5 ciudades, la segunda ciudad se imprimió en consola gracias a que hice referencia al dato que se encuentra en la posiciones 1 (ya que las posiciones empiezan desde la 0).

----------------------------------------------------
Ejercicio 7.- Recorriendo arreglos con forEach:
----------------------------------------------------
    Aquí necesito imprimir cada valor dentro de un arreglo, esto lo hago usando el metodo forEach, primero creando el arreglo asignando valores para usar el metodo forEach que recorre cada elemento donde en cada recorrido se guarda el valor en una varible para imprimirlo y asi imprimir cada dato segun el tamaño del arreglo.

----------------------------------------
Ejercicio 8.- Uso de objetos:
----------------------------------------
    Se necesita un objeto para guardar datos de una persona e imprimir su nombre, para eso creé el objet con sus atributos, para ver nada más un atributo en el console.log se escribe: nombreObjeto.atributo

------------------------------------------
Ejercicio 9.- Manipulación de objetos:
-----------------------------------------
    Este es bastante similar al ejercicio anterior, pero agregamos un atributo extra, muestro 2 atributos como lo hice en el ejercicio pasado: nombreObjeto.atributo.

-----------------------------------------------
Ejercicio 10.- Filtrar elementos de un array:
----------------------------------------------
    En un arreglo con edades, únicamente se requiere mostrar los que son mayores de edad, se resuelve usando el metodo filter() con una condicinal para que solo guardara el valor actual si era mayor o igual a 18.

-----------------------------------
Ejercicio 11.- Mapear un array:
------------------------------------
    Se necesita un arreglo con los numeros elevados al cuadrado de otro arreglo, para esto creando un nuevo arreglo y usando el metodo .map() hice una funcion dentro que retorna el valor actual pero elevado al cuadrado usando el metodo Math.pow.

----------------------------------
Ejercicio 12.- Reducir un array:
------------------------------------
    El objetivo es reducir un array sumando sus valores, por eso uso el metodo reduce() donde primero hice el arreglo inicial y una variable que servirá para acumular la suma de los valores, donde cada recorrido va sumando el valor actual al acumulador para al final imprimir el resultado. 

----------------------------------------------------
Ejercicio 13.- Funciones asíncronas (setTimeout):
----------------------------------------------------
    Este ejercicio necesita una función que salude cada 3 segundos. usando el metodo setTimeout() realicé una funcion que espera 3 segundos para después imprimir un hola dentro de otra función se llama la primera función que envía un mensaje que anuncia que se esperan 3 segundos. 

-----------------------------------------
Ejercicio 14.- Manejo de Promesas:
-----------------------------------------
    Se necesita una promesa que se resuelva en dos segundos, para esto realicé una función que devuelve una nueva promesa y dentro de la promesa se esperan dos segundos para después resolver con un mensaje de "Propuesta resuelta" para cuando la promesa se resuelve.

---------------------------------------
Ejercicio 15.- Uso de async/await:
---------------------------------------
    Debo de mplementar async y await en el ejercicio anterior, aquí al usar await hace que cuando la promesa se cumpla se guarde el valor en una variable y luego imprimir tal valor en consola. 

-----------------------------------------
Ejercicio 16.- Expresiones Regulares:
-----------------------------------------
    Se requiere validar un correo electrónico usando expresiones regulares, creando una expresión regular que no permita mas de un caracter que no sea @ después un arroba seguido de cualquier letra de más de dos caracteres para el dominio, luego con el método pattern se verifica si la cadena cumple en caso contrario devuelve un null que se verifica en una condición para saber si el correo electrónico era válido o no. 

-------------------------------------------
Ejercicio 17.- Transformación de texto:
-------------------------------------------
    Se requiere modificar un texto para eliminar comas y usar mayúsculas, para esto usé dos métodos: .replace() para que encuentre las comas y las cambié por una cadena vacia y toUpperCase() para convertirlo en mayusculas.

-------------------------------------------
Ejercicio 18.- Ordenamiento de un array:
-------------------------------------------
    Se necesita ordenar alfabeticamente un array. usando .sort() que únicamente usándolo en el arreglo por default ya los acomoda alfabeticamente. 

-------------------------------------------------------------------------
Ejercicio 19.- Simulación de un endpoint con fetch (JSONPlaceholder):
--------------------------------------------------------------------------
    Se necesita obtener información de una url, con fetch() se hace la peticion a la url y con el método 
    .json() se transforma la respuesta que cuando la promesa se resuelve este imprime la respuesta en forma de objeto. 

---------------------------------------------------------
Ejercicio 20. Creacion de un pequeño CRUD en memoria:
---------------------------------------------------------
    Se requiere hacer un array que alamacena objetos funciones CRUD, definí variables de prueba, la función createTask genera un objeto con esas propiedades y lo agrega al arreglo. deleteTask busca una tarea por ID y, si existe, la elimina del arreglo. completedTask busca la tarea por ID y marca su propiedad comp como true. Finalmente, se ejecuta el flujo completo: se crea la tarea, se marca como completada y luego se elimina, mostrando el estado del arreglo en cada paso.