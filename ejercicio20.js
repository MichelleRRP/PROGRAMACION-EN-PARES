//Creación del arreglo de objetos
var tareas = [{}];
//Variables de prueba
const id = 3;
const desc = "Ve a tocar pasto";
const completado = false;
//Función para crear una nueva tarea
function createTask(id, desc, comp){
    let newTask = new Object();
    newTask.id = id;
    newTask.desc = desc;
    newTask.comp = comp;
    //Agrega el objeto temporal al arreglo tareas
    tareas.push(newTask);
}
//Función para eliminar una tarea por ID
function deleteTask(id){
    //Busca coincidencias con la id
    const index = tareas.findIndex(item => item.id === id);
    //Si existe, la elimina del arreglo
    if (index !== -1) {
        tareas.splice(index, 1);
    }
}
//Función para marcar tareas como completadas por ID
function completedTask(id){
    //Busca la tarea
    const item = tareas.find(task => task.id === id);
    //Si existe, cambia el atributo completado a true
    if (item) {
    item.comp = true;
    }
}
//Flujo de creación, marcado como completo y eliminación
createTask(id,desc,completado);
console.log(tareas);
completedTask(id);
console.log(tareas);
deleteTask(id);
console.log(tareas);