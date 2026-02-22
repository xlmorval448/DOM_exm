
document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".profile-card");
    const checkboxEntrevista = document.getElementById("interviewMode");

    tarjetas.forEach((tarjeta) => {
        // 1. Localizamos la imagen para sacar el data-bio y los eventos
        const imagen = tarjeta.querySelector("img");
        const textoBio = imagen.dataset.bio; // [cite: 7]

        // 2. Creamos el DIV dinámicamente
        const divBio = document.createElement("div");
        divBio.classList.add("bio-info"); // [cite: 6]
        divBio.textContent = textoBio;
        divBio.style.display = "none"; // Oculto por defecto
        tarjeta.appendChild(divBio); // Lo colgamos de la tarjeta [cite: 6]

        // 3. Evento al pasar el ratón por la foto [cite: 10]
        imagen.addEventListener("mouseover", () => {
            // Si el modo entrevista está marcado, mostramos
            if (checkboxEntrevista.checked) { // [cite: 10, 12]
                divBio.style.display = "flex"; // [cite: 10]
            }
        });

        // 4. Evento al quitar el ratón [cite: 11]
        imagen.addEventListener("mouseout", () => {
            divBio.style.display = "none"; // [cite: 11]
        });
    });
});