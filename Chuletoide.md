# DOM CheatSheet - Boletín Práctico

## 1. Eventos a Capturar

| Evento | Cuándo se dispara |
| :--- | :--- |
| **`click`** | Al pulsar botones, celdas de tabla, filas o imágenes. |
| **`change`** | Al cambiar la opción seleccionada en un desplegable (`<select>`). |
| **`mouseover`** | Al poner el puntero del ratón sobre un elemento (ej: texto del captcha). |
| **`mouseout`** | Al sacar el puntero del ratón del elemento. |
| **`submit`** | Al intentar enviar un formulario. |

---

## 2. Navegación y Lectura del Árbol DOM

* **`nodeType`:** Devuelve un número que indica si es un elemento HTML (1), atributo (2), o texto puro (3).
* **`nodeName`:** El nombre de la etiqueta en mayúsculas (ej: "UL", "DIV").
* **`nodeValue`:** El contenido de los nodos de texto.
* **`constructor.name`:** La clase exacta del objeto en JavaScript (ej: `HTMLUListElement`).
* **`previousElementSibling`:** Devuelve el elemento que está justo antes del seleccionado en el mismo nivel.
* **`nextElementSibling`:** Devuelve el elemento que está justo después del seleccionado en el mismo nivel.
* **`closest('selector')`:** Busca hacia arriba en el árbol DOM el ancestro más cercano que coincida con el selector.

---

## 3. Creación, Modificación y Borrado (Sin `innerHTML`)

* **`document.createElement('etiqueta')`:** Fabrica un nuevo elemento HTML desde cero.
* **`document.createTextNode('texto')`:** Crea un nodo que solo contiene texto.
* **`padre.appendChild(hijo)`:** Engancha un elemento al final de un contenedor. Si el elemento ya existe, lo mueve de sitio.
* **`padre.insertBefore(nuevoNodo, nodoReferencia)`:** Inserta un elemento justo antes de otro.
* **`nodo.cloneNode(true)`:** Hace una copia exacta de un elemento y de todo su contenido interno.
* **`nodo.remove()`:** Destruye un elemento por completo del DOM.

---

## 4. Clases y Estilos Dinámicos

* **`element.classList.add('clase')`**
* **`element.classList.remove('clase')`**
* **`element.classList.toggle('clase')`:** Si la clase está, la quita; si no está, la pone.
* **`element.style.propiedad`:** Cambia estilos en línea directamente.
* **`element.setAttribute('href', 'nuevo.css')`:** Cambia el valor de un atributo HTML concreto.
