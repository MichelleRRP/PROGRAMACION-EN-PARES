//Petición HTTP
fetch('https://jsonplaceholder.typicode.com/todos/1')
//Muestra los datos del JSON
.then(response => response.json())
.then(data => console.log(data));