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


## 5. Temporizadores (Timers)

* **`setTimeout(funcion, milisegundos)`:** Ejecuta una función una sola vez después del tiempo indicado.
* **`setInterval(funcion, milisegundos)`:** Ejecuta una función repetidamente cada cierto intervalo de tiempo.
* **`clearTimeout(identificador)`:** Cancela un `setTimeout` antes de que llegue a ejecutarse.
* **`clearInterval(identificador)`:** Detiene la ejecución repetitiva de un `setInterval`.

---

## 6. Control de Eventos Avanzado

* **`event.preventDefault()`:** Evita el comportamiento por defecto de un evento (vital para el Ejercicio 9 al hacer el submit del formulario).
* **`event.stopPropagation()`:** Evita que el evento "burbujee" hacia los elementos padre.
* **`event.target`:** Devuelve el elemento exacto que disparó el evento (muy útil cuando usas delegación de eventos en una tabla o lista).
* **`event.currentTarget`:** Devuelve el elemento que tiene el `addEventListener` asociado.

---

## 7. Transformación y Búsqueda de Datos

* **`parseInt(cadena)`**
* **`parseFloat(cadena)`**
* **`isNaN(valor)`:** Comprueba si un valor NO es un número válido.
* **`array.find(condicion)`:** Devuelve el primer elemento del array que cumple la condición.
* **`array.filter(condicion)`:** Devuelve un nuevo array con todos los elementos que cumplen la condición.
* **`array.forEach(funcion)`:** Ejecuta la función indicada una vez por cada elemento del array.
* **`Number.toFixed(decimales)`:** Formatea un número usando notación de punto fijo.

## 8. Navegación Familiar del DOM (Parent/Child)

* **`nodo.parentNode`**
* **`nodo.children`**
* **`nodo.childNodes`**
* **`nodo.firstElementChild`**
* **`nodo.lastElementChild`**
* **`nodo.hasChildNodes()`**

---

## 9. Formularios y Controles (Inputs, Selects, Checkboxes)

* **`input.value`**
* **`input.checked`**
* **`select.selectedIndex`**
* **`select.options`**
* **`form.elements`**
* **`form.reset()`**

---

## 10. Tablas HTML (Propiedades Específicas)

* **`tabla.rows`**
* **`fila.cells`**
* **`fila.rowIndex`**
* **`celda.cellIndex`**
* **`tabla.insertRow(indice)`**
* **`fila.insertCell(indice)`**
* **`fila.deleteCell(indice)`**
* **`tabla.deleteRow(indice)`**

---

## 11. Matemáticas y Transformaciones (Captcha y NodeLists)

* **`Math.random()`**
* **`Math.floor(numero)`**
* **`document.querySelectorAll('selector')`**
* **`Array.from(nodeList)`**

## 12. Manipulación de Texto y Contenido (Alternativas a innerHTML)

* **`nodo.textContent`**
* **`nodo.innerText`**
* **`cadena.trim()`**
* **`cadena.toUpperCase()`**
* **`cadena.toLowerCase()`**

---

## 13. Ordenación y Modificación de Arrays (Para el Gestor de Tareas)

* **`array.sort(funcionDeComparacion)`**
* **`array.push(elemento)`**
* **`array.splice(indice, cantidad, ...elementos)`**
* **`array.map(funcion)`**
* **`array.includes(valor)`**

---

## 14. Atributos Genéricos y Lógica (Para el Ajedrez y Validaciones)

* **`elemento.getAttribute('atributo')`**
* **`elemento.removeAttribute('atributo')`**
* **`elemento.hasAttribute('atributo')`**
* **`numero % 2 === 0`**