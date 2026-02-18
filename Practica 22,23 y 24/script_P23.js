"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MODIFICAR EL CONTENIDO DE LA PORTADA (TÍTULO Y SUBTÍTULO) ---
    console.log("--- 1. MODIFICANDO TÍTULO Y SUBTÍTULO ---");

    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    
    if (heroTitle && heroSubtitle) {
        // Modificar el título de la portada
        heroTitle.textContent = "TOURS DEL CARIBE MEXICANO";
        
        // Modificar el subtítulo
        heroSubtitle.textContent = "Tour a nuevas experiencias inolvidables";
        
        console.log("Título y subtítulo modificados correctamente.");
    } else {
        console.log("Error: No se encontraron los elementos del hero para modificar.");
    }

    // --------------------------------------------------------------------------

    // --- 2. AGREGAR A LOS BOTONES DE LAS TARJETAS DE TOURS EL TEXTO: “Información detallada” ---
    console.log("\n--- 2. MODIFICANDO TEXTO DE BOTONES DE TARJETAS ---");

    // Seleccionamos todos los botones que están dentro de las tarjetas de tours
    const tourCardButtons = document.querySelectorAll('.tour-card button');

    if (tourCardButtons.length > 0) {
        tourCardButtons.forEach((button, index) => {
            // Reemplazamos el texto actual ("Ver Tour")
            button.textContent = "Información detallada";
            console.log(`Botón de Tarjeta ${index + 1} modificado.`);
        });
    } else {
        console.log("No se encontraron botones de tarjetas de tours (.tour-card button).");
    }

    // --------------------------------------------------------------------------

    // --- 3. ELIMINAR EL BOTÓN DE DETALLES DE LA TABLA DE PRECIOS ---
    console.log("\n--- 3. ELIMINANDO BOTÓN DE DETALLES DE LA TABLA ---");

    // Según el boceto de la Práctica 18 (punto 4), había "Botones de acción por fila: 'Reservar' o 'Detalles'".
    // Asumiendo que agregaste un botón de "Detalles" o que la instrucción se refiere a eliminar una COLUMNA
    // de botones (para fines prácticos, eliminaremos la columna si la creaste, o un elemento si lo pusiste).

    // Opción 1 (Más probable): Si agregaste botones o enlaces de "Detalles" dentro de las celdas de la tabla (td):
    // Nota: El código HTML original que generamos no incluía estos botones, pero si los agregaste, esta es la forma:
    
    /* const detallesBotones = document.querySelectorAll('.tour-table-section table a[href="#detalles"]');
    if (detallesBotones.length > 0) {
        detallesBotones.forEach(btn => {
            btn.remove(); // Elimina el elemento del DOM
        });
        console.log(`Se eliminaron ${detallesBotones.length} botones/enlaces de 'Detalles' de la tabla.`);
    } else {
        // Si no hay botones/enlaces, buscamos la columna, si la hubieras implementado.
        console.log("No se encontraron botones/enlaces de 'Detalles' específicos para eliminar.");
    }
    */

    // Opción 2 (Ajuste al boceto): Eliminando el texto 'Detalles' de los encabezados si se implementó como texto:
    // **Vamos a eliminar la última columna de la tabla para simular la eliminación de una acción.**
    
    const tableRows = document.querySelectorAll('.tour-table-section table tr');
    let columnasEliminadas = 0;

    if (tableRows.length > 0) {
        tableRows.forEach(row => {
            // Intentamos eliminar la penúltima columna (donde iría "Precio" en el código original, 
            // pero si la implementación fue fiel al boceto, podríamos eliminar la columna "Disponibilidad" o "Precio")

            // Eliminamos la última celda (td o th) de cada fila.
            const lastCell = row.lastElementChild;
            if (lastCell) {
                lastCell.remove();
                columnasEliminadas++;
            }
        });
        
        console.log(`Se eliminó la última columna de la tabla (simulando la eliminación de la acción 'Detalles').`);
    } else {
        console.log("No se encontraron filas en la tabla para manipular.");
    }

    // NOTA: Para que esta simulación de "Eliminar el botón de detalles" sea perfecta,
    // se asume que la acción de detalles estaba en la última columna de la tabla.
    // Si la acción estaba en una celda específica, debes cambiar el selector.

});