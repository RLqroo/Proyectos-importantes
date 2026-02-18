"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // 1. Obtener el contenido de la portada (titulo y subtitulo) y mostrarlo en consola
    console.log("--- 1. CONTENIDO DE LA PORTADA ---");
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        const titulo = heroContent.querySelector('h1')?.textContent;
        const subtitulo = heroContent.querySelector('p')?.textContent;
        
        console.log(`Título de la Portada: ${titulo}`);
        console.log(`Subtítulo de la Portada: ${subtitulo}`);
    } else {
        console.log("Error: No se encontró el contenido de la portada (.hero-content).");
    }

    // --------------------------------------------------------------------------

    // 2. Recorrer todos las tarjetas de la página y mostrar su contenido en consola.
    console.log("\n--- 2. CONTENIDO DE LAS TARJETAS DE TOURS ---");
    const tourCards = document.querySelectorAll('.tour-card');

    if (tourCards.length > 0) {
        tourCards.forEach((card, index) => {
            const tituloTour = card.querySelector('h3')?.textContent;
            const descripcionTour = card.querySelector('p')?.textContent;
            
            console.log(`Tarjeta ${index + 1}:`);
            console.log(`  Título: ${tituloTour}`);
            console.log(`  Descripción: ${descripcionTour}`);
        });
    } else {
        console.log("No se encontraron tarjetas de tours (.tour-card).");
    }

    // --------------------------------------------------------------------------

    // 3. Obtener todos los elementos de la tabla y mostrarlos uno por uno en consola.
    console.log("\n--- 3. ELEMENTOS DE LA TABLA (TOURS DESTACADOS) ---");
    const tableCells = document.querySelectorAll('.tour-table-section table th, .tour-table-section table td');

    if (tableCells.length > 0) {
        tableCells.forEach((cell, index) => {
            // El texto es recortado y el número de elemento es (índice + 1)
            console.log(`Elemento de la tabla [${index + 1}]: ${cell.textContent.trim()}`);
        });
    } else {
        console.log("No se encontraron elementos de la tabla.");
    }
    
    // --------------------------------------------------------------------------

    // 4. Detectar en el formulario la cantidad de opciones de tours que tiene y mostrar en consola un mensaje que incluya el número total de elementos.
    console.log("\n--- 4. OPCIONES DE TOURS/SERVICIOS EN EL FORMULARIO ---");
    
    // Vamos a contar las opciones del tipo "checkbox" bajo el título "Tipo de servicio:"
    const checkboxGroup = document.querySelector('.checkbox-group');
    
    if (checkboxGroup) {
        const checkboxes = checkboxGroup.querySelectorAll('input[type="checkbox"]');
        const totalOpciones = checkboxes.length;

        console.log(`El formulario tiene un total de ${totalOpciones} opciones de 'Tipo de servicio' (checkboxes):`);
        
        checkboxes.forEach((checkbox, index) => {
            // Buscamos el label asociado al checkbox
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            console.log(`  Opción ${index + 1}: ${label ? label.textContent : checkbox.id}`);
        });

    } else {
        console.log("Error: No se encontró el grupo de opciones (.checkbox-group) en el formulario.");
    }

});