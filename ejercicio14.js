function miPromesa() {
  //Creación de la promesa
  return new Promise((resolve, reject) => {
    //Espera de 2 segundos
    setTimeout(() => {
      //Resuelve la promesa
      resolve("Promesa resuelta");
    }, 2000);
  });
}
//Manda a llamar la funcion promesa
miPromesa().then((mensaje) => {
  console.log(mensaje);
});