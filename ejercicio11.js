//Creación del arreglo
let numeros = [1,2,3,4,5];
//Crea un array nuevo con el array antiguo y eleva al cuadrado
let potencia = numeros.map(function(x){
    return Math.pow(x,2);
});
//Mostrar nuevo arreglo
console.log(potencia);
