"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. Modificar el enlace del aviso de privacidad para que abra un alert al hacer clic.
    // --------------------------------------------------------------------------
    console.log("--- 1. CONFIGURANDO EVENTO DEL AVISO DE PRIVACIDAD ---");
    
    // El "Aviso de privacidad" está en el footer. Lo seleccionamos por su contenedor o texto.
    const avisoPrivacidadElement = document.querySelector('footer p');

    if (avisoPrivacidadElement) {
        // 1.1 Convertir el texto en un elemento clickeable (un enlace <a>)
        const textoOriginal = avisoPrivacidadElement.textContent;
        avisoPrivacidadElement.innerHTML = `<a href="#" id="aviso-link">${textoOriginal}</a>`;
        
        const avisoLink = document.getElementById('aviso-link');

        // 1.2 Agregar el Event Listener
        avisoLink.addEventListener('click', (event) => {
            // Prevenimos el comportamiento por defecto del enlace (que es ir a #)
            event.preventDefault(); 
            
            const mensajeAviso = "Aviso de privacidad: Sus datos serán tratados con la mayor confidencialidad y solo se usarán para fines relacionados con su reservación de tours.";
            
            // Abrir la alerta
            alert(mensajeAviso);
            console.log("Alerta de Aviso de Privacidad mostrada.");
        });
        
    } else {
        console.log("Error: No se encontró el elemento del Aviso de privacidad.");
    }


    // --------------------------------------------------------------------------
    // 2. Habilitar un evento en los botones de las tarjetas para abrir info en nueva ventana (window.open).
    // --------------------------------------------------------------------------
    console.log("\n--- 2. CONFIGURANDO EVENTO EN BOTONES DE TARJETAS ---");

    // Seleccionamos todos los botones dentro de las tarjetas de tours
    const tourCardButtons = document.querySelectorAll('.tour-card button');

    if (tourCardButtons.length > 0) {
        tourCardButtons.forEach((button) => {
            // Subimos al contenedor padre para obtener toda la información de la tarjeta
            const card = button.closest('.tour-card');
            
            // Obtenemos los datos necesarios
            const tituloTour = card.querySelector('h3')?.textContent || 'Tour Desconocido';
            const descripcionTour = card.querySelector('p')?.textContent || 'Sin descripción disponible.';
            const imagenSrc = card.querySelector('img')?.src || '';
            
            // Agregar el Event Listener al botón
            button.addEventListener('click', () => {
                
                // --- Contenido HTML para la nueva ventana ---
                const contenidoVentana = `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <title>Detalles del Tour: ${tituloTour}</title>
                        <style>
                            body { font-family: sans-serif; padding: 20px; text-align: center; }
                            h1 { color: #007bff; }
                            img { max-width: 90%; height: auto; border-radius: 8px; margin-bottom: 15px; }
                        </style>
                    </head>
                    <body>
                        <h1>${tituloTour}</h1>
                        <img src="${imagenSrc}" alt="${tituloTour}">
                        <p>${descripcionTour}</p>
                        <button onclick="window.close()">Cerrar Ventana</button>
                    </body>
                    </html>
                `;

                // --- Abrir la nueva ventana usando window.open() ---
                const nuevaVentana = window.open(
                    '', // URL: Dejamos vacío para escribir contenido directamente
                    `Detalles_${tituloTour.replace(/\s/g, '_')}`, // Nombre de la ventana
                    'width=500,height=450,resizable=yes,scrollbars=yes' // Especificaciones
                );
                
                // Escribir el contenido HTML en la nueva ventana
                if (nuevaVentana) {
                    nuevaVentana.document.write(contenidoVentana);
                    nuevaVentana.document.close();
                    console.log(`Abriendo ventana de detalles para: ${tituloTour}`);
                }
            });
        });
    } else {
        console.log("No se encontraron botones de tarjetas de tours.");
    }

});