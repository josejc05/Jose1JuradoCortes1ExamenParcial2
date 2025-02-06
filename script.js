document.addEventListener("DOMContentLoaded", () => {
    // Ejercicio 1: Cambio de Color
    const botonColor = document.getElementById("cambiarColor");
    const textoColor = document.getElementById("colorTexto");

    botonColor.addEventListener("click", () => {
        const colores = ["red", "blue", "green", "purple", "orange"];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        textoColor.style.color = colorAleatorio;
    });

    // Ejercicio 2: Lista de Tareas
    const inputTarea = document.getElementById("tareaInput");
    const botonAgregar = document.getElementById("agregarTarea");
    const listaTareas = document.getElementById("listaTareas");

    botonAgregar.addEventListener("click", () => {
        if (inputTarea.value.trim() !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = inputTarea.value;
            listaTareas.appendChild(nuevaTarea);
            inputTarea.value = "";
        }
    });

    // Ejercicio 3: Menú de Pizzas
    const botonMenu = document.getElementById("cargarMenu");
    const menuPizzas = document.getElementById("menuPizzas");

    botonMenu.addEventListener("click", async () => {
        const pizzas = ["Margarita", "Pepperoni", "Cuatro Quesos", "Hawaiana", "Barbacoa"];
        menuPizzas.innerHTML = "";
        pizzas.forEach(pizza => {
            const item = document.createElement("li");
            item.textContent = pizza;
            menuPizzas.appendChild(item);
        });
    });

    // Ejercicio 4: Formulario de Reserva
    const formulario = document.getElementById("formReserva");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Reserva realizada con éxito");
        formulario.reset();
    });
});
