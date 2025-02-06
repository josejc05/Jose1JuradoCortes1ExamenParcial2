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
        const tareaTexto = inputTarea.value.trim();
        const soloLetras = /^[a-zA-Z\s]+$/;

        if (tareaTexto === "" || !soloLetras.test(tareaTexto)) {
            alert("Por favor, ingrese una tarea válida (solo letras).");
            return;
        }

        const nuevaTarea = document.createElement("div");
        nuevaTarea.className = "tarea";

        const tareaSpan = document.createElement("span");
        tareaSpan.textContent = tareaTexto;
        nuevaTarea.appendChild(tareaSpan);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "eliminarTarea";
        botonEliminar.addEventListener("click", () => {
            listaTareas.removeChild(nuevaTarea);
        });
        nuevaTarea.appendChild(botonEliminar);

        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = "";
    });

    // Ejercicio 3: Menú de Pizzas
    const botonMenu = document.getElementById("cargarMenu");
    const menuPizzas = document.getElementById("menuPizzas");

    botonMenu.addEventListener("click", async () => {
        // Simular solicitud a la API ficticia
        const fetchMenu = async () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) {
                        resolve(["Margarita", "Pepperoni", "Hawaiana"]);
                    } else {
                        reject("Error al cargar el menú");
                    }
                }, 2000); // Retardo de 2 segundos
            });
        };

        try {
            const pizzas = await fetchMenu();
            menuPizzas.innerHTML = "<h3>Menú de Pizzas:</h3>";
            pizzas.forEach(pizza => {
                const item = document.createElement("li");
                item.className = "pizza-item";
                item.textContent = pizza;
                menuPizzas.appendChild(item);
            });
        } catch (error) {
            menuPizzas.innerHTML = `<p style="color: red;">${error}</p>`;
        }
    });

    // Ejercicio 4: Formulario de Reserva
    const formulario = document.getElementById("formReserva");
    const confirmacionReserva = document.getElementById("confirmacionReserva");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const numPersonas = document.getElementById("numPersonas").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;

        confirmacionReserva.textContent = `Reserva confirmada para ${nombre} el ${fecha}T${hora} para ${numPersonas} personas.`;
        confirmacionReserva.classList.add("success");
        confirmacionReserva.style.display = "block";

        formulario.reset();
    });
});