//Funcion espera
function espera(){
    //Funcion para esperar 3 segundos
    setTimeout(() => {console.log("Hola")}, 3000)
}
//Función asíncrona
async function  saludoAsync(){
    const res = await espera();
    console.log("Espera de 3 segundos...");
}

saludoAsync();