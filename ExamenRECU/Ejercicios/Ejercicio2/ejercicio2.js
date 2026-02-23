document
  .getElementById("btnRestaurar")
  .addEventListener("click", () => location.reload());

document.addEventListener("DOMContentLoaded", () => {
  const btnMover = document.getElementById("btnMover");

  btnMover.addEventListener("click", () => {
    const tareasSeleccionadas = document.querySelectorAll("#backlog .tarea:checked");
    const radioDestino = document.querySelector('input[name="destino"]:checked');

    if (tareasSeleccionadas.length === 0 || !radioDestino) {
      alert("Por favor, selecciona al menos una tarea y una estantería de destino.");
      return;
    }

    const idDestino = radioDestino.value;
    const contenedorDestino = document.getElementById(idDestino);
    const estanteInterior = contenedorDestino.querySelector(".columna");
    const metodo = document.querySelector('input[name="metodo"]:checked').value;
    const mantenerCopia = document.querySelector('input[name="clonar"]:checked').value === "si";

    tareasSeleccionadas.forEach((checkbox) => {
      const tarea = checkbox.closest(".tarea");
      console.log(tarea);
      let elementoColocar = mantenerCopia ? tarea.cloneNode(True) : tarea;
      console.log(elementoColocar);

      if (mantenerCopia) {
        elementoColocar.querySelector(".check-prod").checked = false;
      }

      switch (metodo) {
        case "append":
          estanteInterior.append(elementoColocar);
          break;
        case "prepend":
          estanteInterior.prepend(elementoColocar);
          break;
      }
    });
  });
});