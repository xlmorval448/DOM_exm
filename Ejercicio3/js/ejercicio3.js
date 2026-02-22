document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.forms["formularioStock"];
    const divMensajes = document.getElementById("mensajes"); // [cite: 30]

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Detenemos el envío por defecto
        divMensajes.innerHTML = ""; // Limpiamos mensajes anteriores

        // Arrays para guardar los nombres de campos vacíos y los errores de formato
        const camposVacios = [];
        const camposConErrores = [];

        // Capturamos los valores
        const fabricante = formulario.fabricante.value.trim();
        const producto = formulario.producto.value.trim();
        const fecha = formulario.fecha.value.trim();
        const categoria = formulario.categoria.value;
        const referencia = formulario.referencia.value.trim();
        const ubicacion = formulario.ubicacion.value.trim();

        // EXPRESIONES REGULARES [cite: 42, 43, 44, 48]
        const regexNombres = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ]*$/; // [cite: 42, 43]
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/; // [cite: 43]
        const regexUbicacion = /^[A-Z]-\d{2}$/; // [cite: 48]

        // 1. VALIDACIÓN DE CAMPOS VACÍOS (Todos son obligatorios) [cite: 41]
        if (!fabricante) camposVacios.push("Fabricante");
        if (!producto) camposVacios.push("Producto");
        if (!fecha) camposVacios.push("Fecha Entrada");
        if (!referencia) camposVacios.push("Cód. Referencia");
        if (!ubicacion) camposVacios.push("Ubicación Pasillo");

        // 2. VALIDACIÓN DE FORMATOS (Solo comprobamos si NO están vacíos)
        if (fabricante && !regexNombres.test(fabricante)) camposConErrores.push("Fabricante no tiene un formato válido."); // [cite: 42]
        if (producto && !regexNombres.test(producto)) camposConErrores.push("Producto no tiene un formato válido."); // [cite: 42]
        if (fecha && !regexFecha.test(fecha)) camposConErrores.push("La fecha debe ser AAAA-MM-DD."); // [cite: 43]
        if (ubicacion && !regexUbicacion.test(ubicacion)) camposConErrores.push("La ubicación debe ser del tipo A-00."); // [cite: 48]

        // Validación especial del código de referencia según la categoría [cite: 44]
        if (referencia) {
            let regexRef;
            if (categoria === "electronica") {
                regexRef = /^EL-\d{3}[A-Z]$/; // [cite: 45]
            } else if (categoria === "hogar") {
                regexRef = /^[A-Z]{3}-\d{4}$/; // [cite: 46]
            } else if (categoria === "alimentacion") {
                regexRef = /^AL\d{4}EXP$/; // [cite: 47]
            }

            if (regexRef && !regexRef.test(referencia)) {
                camposConErrores.push(`La referencia no coincide con el formato de ${categoria}.`);
            }
        }

        // 3. DECISIÓN FINAL: Enviar o mostrar errores [cite: 31]
        if (camposVacios.length === 0 && camposConErrores.length === 0) {
            // Todo correcto, permitimos el envío [cite: 31]
            formulario.submit();
        } else {
            // Mostrar capa de campos vacíos [cite: 30]
            if (camposVacios.length > 0) {
                const divVacios = document.createElement("div");
                divVacios.classList.add("empty-list"); // [cite: 33, 39]
                divVacios.innerHTML = `<strong>Campos obligatorios vacíos:</strong><ul>` + camposVacios.map(c => `<li>${c}</li>`).join("") + `</ul>`;
                divMensajes.appendChild(divVacios);
            }

            // Mostrar capa de errores de formato [cite: 30]
            if (camposConErrores.length > 0) {
                const divErrores = document.createElement("div");
                divErrores.classList.add("error-list"); // [cite: 39, 40]
                divErrores.innerHTML = `<strong>Errores de formato:</strong><ul>` + camposConErrores.map(e => `<li>${e}</li>`).join("") + `</ul>`;
                divMensajes.appendChild(divErrores);
            }
        }
    });
});