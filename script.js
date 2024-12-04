
document.addEventListener("DOMContentLoaded", function() { /*asegura de que el DOM esté completamente cargado antes de ejecutar el script.*/
    /*Script para Menu Hamburguesa Header*/
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#btn-abrir-menu");
    const cerrar = document.querySelector("#btn-cerrar-menu");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible"); // Agrego la clase visible al nav
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible"); // Remuevo la clase visible al nav
    });

    
});

