//Pregunta desde ventana su nombre
//NOTA: DESCOMENTAR/COMENTAR LLAMADO DE ESTE ARCHIVO EN INDEX.HTML
let nombre = prompt("Escribe un nombre");
//Funcion que recibe el nombre
function saludar(nombre){
    console.log("Hola " + nombre);
}
//Llamado de la función
saludar(nombre);