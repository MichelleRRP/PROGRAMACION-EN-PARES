//[Cualquier cadena]@[cualquier cadena].[cuaquier cadena de 2 de long en adelante]
//Creación de la expresión regular
let pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
//Cadena de prueba
let str = "correoprueba@example.com";
//Comparación de la cadena con la expresión regular
let res = pattern.exec(str);
//Evaluación del resultado de la comparación
if (res == null){
    console.log("Correo electrónico no válido.")
}else{
    console.log("Correo electrónico válido.")
}