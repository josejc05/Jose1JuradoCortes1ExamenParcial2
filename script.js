document.addEventListener("DOMContentLoaded", () => {
    // Ejercicio 1: Cambio de Color
    const botonColor = document.getElementById("cambiarColor");
    const textoColor = document.getElementById("colorTexto");
    const contenedorColor = textoColor.parentElement;

    botonColor.addEventListener("click", () => {
        contenedorColor.style.backgroundColor = "#ffcc00";
        textoColor.style.border = "1px solid lightgray";
        textoColor.textContent = "Color modificado";
    });

    // Ejercicio 2: Lista de Tareas
    const inputTarea = document.getElementById("tareaInput");
    const botonAgregar = document.getElementById("agregarTarea");
    const listaTareas = document.getElementById("listaTareas");

    botonAgregar.addEventListener("click", () => {
        if (inputTarea.value.trim() !== "") {
            const nuevaTarea = document.createElement("div");
            nuevaTarea.className = "tarea";

            const tareaTexto = document.createElement("span");
            tareaTexto.textContent = inputTarea.value;
            nuevaTarea.appendChild(tareaTexto);

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.className = "eliminarTarea";
            botonEliminar.addEventListener("click", () => {
                listaTareas.removeChild(nuevaTarea);
            });
            nuevaTarea.appendChild(botonEliminar);

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