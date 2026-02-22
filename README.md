# Cheat Sheet: DOM y Expresiones Regulares

## 1. Manejo del DOM: Selección y Nodos

### Selección de Elementos
```javascript
const elementoUnico = document.querySelector("#miId");
const multiplesElementos = document.querySelectorAll(".miClase");
const inputChequeado = document.querySelector('input[name="opcion"]:checked');
```

### Creación y Configuración
```javascript
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Texto dinámico";
nuevoDiv.classList.add("nueva-clase");
nuevoDiv.classList.remove("oculto");
```

### Lectura de Atributos Personalizados (Data-Attributes)
```javascript
const valorAtributo = imagen.getAttribute("alt");
const valorDataset = imagen.dataset.bio;
```

---

## 2. Inserción y Movimiento de Elementos
Métodos vitales para mover nodos en el documento.

### Métodos de Inserción
```javascript
contenedorDestino.append(elemento);
contenedorDestino.prepend(elemento);
referencia.before(elemento);
referencia.after(elemento);
```

### Clonación de Nodos
```javascript
const nodoClonado = elementoOriginal.cloneNode(true);
contenedorDestino.append(nodoClonado);
```

---

## 3. Eventos y Formularios

### Asignación de Eventos
```javascript
boton.addEventListener("click", (evento) => {
    evento.preventDefault();
});

tarjeta.addEventListener("mouseover", (evento) => {
    tarjeta.style.display = "flex";
});

tarjeta.addEventListener("mouseout", (evento) => {
    tarjeta.style.display = "none";
});

checkbox.addEventListener("change", (evento) => {
    if (checkbox.checked) {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }
});
```

---

## 4. Expresiones Regulares (RegEx)

### Uso en JavaScript
```javascript
const patron = /^[A-Z]{3}-\d{4}$/;
const esValido = patron.test(valorInput);
```

### Sintaxis Esencial
| Símbolo | Significado | Ejemplo |
| :--- | :--- | :--- |
| `^` | Inicio de la cadena | `/^A/` |
| `$` | Fin de la cadena | `/Z$/` |
| `\d` | Cualquier número (0-9) | `/\d/` |
| `[A-Z]` | Cualquier letra mayúscula | `/[A-Z]/` |
| `[a-z]` | Cualquier letra minúscula | `/[a-z]/` |
| `{n}` | Exactamente n repeticiones | `/\d{3}/` |
| `{n,m}` | Entre n y m repeticiones | `/[A-Z]{2,4}/` |
| `+` | Una o más repeticiones | `/[a-z]+/` |
| `*` | Cero o más repeticiones | `/[0-9]*/` |

### Ejemplos Prácticos
* **Mayúscula inicial y resto letras:** `/^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ]*$/`
* **Fecha (AAAA-MM-DD):** `/^\d{4}-\d{2}-\d{2}$/`
* **Prefijo "EL-" + 3 números + Letra:** `/^EL-\d{3}[A-Z]$/`
* **Tres letras + guion + 4 números:** `/^[A-Z]{3}-\d{4}$/`

---

## 5. Diccionario de RegEx para Formularios

| Campo a Validar | Patrón RegEx | Explicación |
| :--- | :--- | :--- |
| **DNI (España)** | `/^\d{8}[A-HJ-NP-TV-Z]$/` | 8 números y 1 letra (filtros oficiales). |
| **NIE (España)** | `/^[XYZ]\d{7}[A-Z]$/` | Letra inicial X, Y o Z, 7 números y letra final. |
| **Email** | `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` | Formato estándar de correo. |
| **Móvil (ESP)** | `/^[67]\d{8}$/` | 9 dígitos empezando por 6 o 7. |
| **CP (España)** | `/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/` | 5 dígitos válidos por provincia. |
| **Usuario** | `/^[a-zA-Z0-9_-]{3,16}$/` | Alfanumérico, 3 a 16 caracteres. |
| **Password** | `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/` | Min 8 carac, 1 Mayus, 1 Minus, 1 Núm. |
| **Hora (24h)** | `/^([01]\d|2[0-3]):([0-5]\d)$/` | Formato HH:MM. |
| **Tarjeta** | `/^\d{16}$/` | 16 dígitos seguidos. |
| **Hexadecimal** | `/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/` | Color HEX con o sin #. |
| **Matrícula** | `/^\d{4}[B-DF-HJ-NP-TV-Z]{3}$/` | 4 números y 3 consonantes (ESP). |