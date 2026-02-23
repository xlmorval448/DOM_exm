document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.forms["formularioFlota"];
    const divMensajes = document.getElementById("mensajes");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        divMensajes.innerHTML = "";

        const camposVacios = [];
        const camposConErrores = [];

        const nombre = formulario.conductor.value.trim();
        const fecha = formulario.fecha.value.trim();
        const tipo = formulario.tipoVehiculo.value.trim();
        const matricula = formulario.matricula.value.trim();
        const plaza = formulario.plaza.value.trim();

        const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ]*$/;
        const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
        const regexPlaza = /^[A-Z]-\d{3}$/;

        if (!nombre) camposVacios.push("Nombre");
        if (!fecha) camposVacios.push("Fecha");
        if (!tipo) camposVacios.push("Tipo Vehículo");
        if (!matricula) camposVacios.push("Matricula");
        if (!plaza) camposVacios.push("Plaza");

        if(nombre && !regexNombre.test(nombre)) camposConErrores.push("Nombre no tiene un formato válido.");
        if (fecha && !regexFecha.test(fecha)) camposConErrores.push("La fecha debe ser AAAA-MM-DD.");
        if (plaza && !regexPlaza.test(plaza)) camposConErrores.push("Formato de Plaza no valido [(A-Z)-(000-999)].");

        if (matricula) {
            let regexMatricula;
            if (tipo === "turismo") {
                regexMatricula = /^\d{4}[A-Z]{3}$/;
            } else if (tipo === "ciclomotor") {
                regexMatricula = /^[C]-\d{4}[A-Z]{3}$/;
            } else if (tipo === "comercial") {
                regexMatricula = /^[F]-\d{2}[A-Z]{2}$/;
            }

            if (regexMatricula && !regexMatricula.test(matricula)) {
                camposConErrores.push(`La matricula no coincide con el formato de ${tipo}.`);
            }
        }

        if (camposVacios.length === 0 && camposConErrores.length === 0) {
            formulario.submit();
        } else {
            if (camposVacios.length > 0) {
                const divVacios = document.createElement("div");
                divVacios.classList.add("empty-list");
                divVacios.innerHTML = `<strong>Campos obligatorios vacíos:</strong><ul>` + camposVacios.map(c => `<li>${c}</li>`).join("") + `</ul>`;
                divMensajes.appendChild(divVacios);
            }

            if (camposConErrores.length > 0) {
                const divErrores = document.createElement("div");
                divErrores.classList.add("error-list");
                divErrores.innerHTML = `<strong>Errores de formato:</strong><ul>` + camposConErrores.map(e => `<li>${e}</li>`).join("") + `</ul>`;
                divMensajes.appendChild(divErrores);
            }
        }
    });
});