//Función asíncrona
async function miPromesa() {
    const res = await resuelto();
    console.log(res)
}
//Funcion que espera 2 segundos y resuelve la promesa
function resuelto(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);  
  });
        
}
// mandado a llamar de la función
miPromesa();