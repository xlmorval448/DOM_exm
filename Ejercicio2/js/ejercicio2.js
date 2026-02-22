// Funcionalidad de reinicio
document
  .getElementById("btnRestaurar")
  .addEventListener("click", () => location.reload());

document.addEventListener("DOMContentLoaded", () => {
  const btnMover = document.getElementById("btnMover");

  btnMover.addEventListener("click", () => {
    // 1. Selección de Origen (productos marcados)
    const productosSeleccionados = document.querySelectorAll("#origen .check-prod:checked"); // [cite: 15]

    // 2. Selección de Destino (estantería)
    const radioDestino = document.querySelector('input[name="destino"]:checked'); // [cite: 16]

    // Control de errores básico por si el usuario no marca nada
    if (productosSeleccionados.length === 0 || !radioDestino) {
      alert("Por favor, selecciona al menos un producto y una estantería de destino.");
      return;
    }

    const idDestino = radioDestino.value;
    const contenedorDestino = document.getElementById(idDestino);
    const estanteInterior = contenedorDestino.querySelector(".contenido-estante");

    // 3. Capturamos las opciones de colocación y clonado
    const metodo = document.querySelector('input[name="metodo"]:checked').value; // [cite: 17]
    const mantenerCopia = document.querySelector('input[name="clonar"]:checked').value === "si"; // [cite: 25, 26]

    // 4. Procesamos cada producto marcado
    productosSeleccionados.forEach((checkbox) => {
      // El elemento que queremos mover es el contenedor completo (div.item-producto)
      const itemProducto = checkbox.closest(".item-producto");

      // Si hay que clonar, copiamos el nodo. Si no, usamos el original.
      let elementoAColocar = mantenerCopia ? itemProducto.cloneNode(true) : itemProducto; // [cite: 25, 26]

      // Pequeño extra: si clonamos, desmarcamos el checkbox del clon para que no pase premarcado a la tienda
      if (mantenerCopia) {
        elementoAColocar.querySelector(".check-prod").checked = false;
      }

      // Ejecutamos el método correspondiente
      switch (metodo) {
        case "append":
          estanteInterior.append(elementoAColocar); // [cite: 18]
          break;
        case "prepend":
          estanteInterior.prepend(elementoAColocar); // [cite: 20]
          break;
        case "before":
          contenedorDestino.before(elementoAColocar); // [cite: 21]
          break;
        case "after":
          contenedorDestino.after(elementoAColocar); // [cite: 23]
          break;
      }
    });
  });
});
