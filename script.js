document.addEventListener("DOMContentLoaded", () => {
    // Ejercicio 1: Manipulación del DOM
    const texto = document.querySelector(".texto");
    texto.textContent = "Color modificado";
    const botonColor = document.getElementById("cambiarColor");
    botonColor.addEventListener("click", () => {
        texto.style.color = "#ffcc00";
    });

    // Ejercicio 2: Creación de elementos dinámicamente
    const tareaInput = document.getElementById("tareaInput");
    const listaTareas = document.getElementById("listaTareas");
    document.getElementById("agregarTarea").addEventListener("click", () => {
        if (tareaInput.value.trim() !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = tareaInput.value;
            listaTareas.appendChild(nuevaTarea);
            tareaInput.value = "";
        }
    });

    // Ejercicio 3: Fetch y Async/Await
    document.getElementById("cargarMenu").addEventListener("click", async () => {
        const menu = document.getElementById("menu");
        menu.textContent = "Cargando...";
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await fetch("https://fake-api-pizzas.com/menu");
            if (!response.ok) throw new Error("Error al cargar el menú");
            const data = await response.json();
            menu.innerHTML = data.pizzas.map(pizza => `<p>${pizza.nombre}</p>`).join("");
        } catch (error) {
            menu.textContent = "Error al cargar el menú";
        }
    });

    // Ejercicio 4: Validación del formulario
    document.getElementById("reservaForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const mensaje = document.getElementById("mensaje");

        if (!nombre || !email || !fecha || !hora) {
            mensaje.textContent = "Por favor, completa todos los campos.";
            mensaje.style.color = "red";
        } else {
            mensaje.textContent = "Reserva realizada con éxito.";
            mensaje.style.color = "green";
        }
    });
});
