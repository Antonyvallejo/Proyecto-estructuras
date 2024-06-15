let queue = []; // La cola, Se declara un array para guardar todos los elementos 

function enqueue() {  //Se declara esta funcion 
    let elementInput = document.getElementById("element");
    let elementValue = elementInput.value.trim(); // Obtener el valor del input y quitar espacios en blanco

    if (elementValue !== "") {
        queue.push(elementValue); // Agregar el elemento a la cola
        renderQueue();//Se agrega los elementos
        elementInput.value = ""; // Limpiar el input después de agregar
    }
}
//Esta funcion elimina el primer elemento de la cola 
function dequeue() {
    if (queue.length > 0) {
        queue.shift(); // Quitar el primer elemento de la cola
        renderQueue(); // guarda de nuevo el arreglo
    }
}

function renderQueue() {
    let queueContainer = document.getElementById("queueContainer");
    queueContainer.innerHTML = ""; // Limpiar la cola antes de renderizar

    queue.forEach(element => {
        let elementDiv = document.createElement("div");
        elementDiv.textContent = element;
        elementDiv.classList.add("queue-element");
        queueContainer.appendChild(elementDiv);
    });
}
