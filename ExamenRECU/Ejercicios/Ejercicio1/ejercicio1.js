document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".menu-item");
    const checkboxAlergias = document.getElementById("allergyMode");

    tarjetas.forEach((tarjeta) => {
        const imagen = tarjeta.querySelector("img");
        const textoAlergias = imagen.dataset.allergens;

        const divAlergenos = document.createElement("div");
        divAlergenos.classList.add("allergen-info");
        divAlergenos.textContent = textoAlergias;
        divAlergenos.style.display = "none";
        tarjeta.appendChild(divAlergenos);

        imagen.addEventListener("mouseover", () => {
            if (checkboxAlergias.checked) {
                divAlergenos.style.display = "flex";
            }
        });

        imagen.addEventListener("mouseout", () => {
            divAlergenos.style.display = "none";
        });
    });
});