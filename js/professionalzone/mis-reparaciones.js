'use strict';

// Simulación de datos de reparación
const repairData = [
    new RepairApplication(
        101,
        1,
        "Arreglo de Fuga en Tubería",
        0, // price
        "placeholder", // imageUrl
        "Madrid", // location
        "Necesito un fontanero urgente para una pequeña fuga en el baño.",
        ["Fontanería", "Urgente", "24h"],
        [2, 3] // interestedPersons
    ),
    new RepairApplication(
        102,
        1,
        "Pintar Salón y Habitación",
        0,
        "placeholder",
        "Barcelona",
        "Pintar paredes y techo de salón (30m2) y una habitación (12m2).",
        ["Pintura", "Interior"],
        [4]
    ),
    new RepairApplication(
        103,
        1,
        "Instalación de Enchufe Doble",
        0,
        "placeholder",
        "Valencia",
        "Añadir un nuevo punto de electricidad en la cocina.",
        ["Electricidad"],
        [] // nadie interesado
    )
];

/**
 * Función para crear el elemento HTML de una tarjeta de reparación.
 * @param {RepairApplication} application - Objeto de la aplicación de reparación.
 * @returns {HTMLElement} El elemento div que contiene la tarjeta de reparación.
 */
function createRepairCard(application) {
    // Contenedor principal de la tarjeta
    const card = document.createElement('div');
    card.className = 'd-flex flex-column flex-md-row p-3 border rounded shadow-sm bg-white';
    card.id = `repair-${application.id}`;

    // Contenedor de la imagen / bloque gris
    const imageContainer = document.createElement('div');
    imageContainer.className = 'd-flex justify-content-center align-items-center me-md-3 mb-3 mb-md-0 border rounded flex-shrink-0';
    imageContainer.style.width = '200px';
    imageContainer.style.height = '120px';
    imageContainer.innerHTML = '<strong class="text-secondary">PRIMERA IMAGEN</strong>';

    // Contenido de la reparación (nombre, descripción, tags)
    const content = document.createElement('div');
    content.className = 'flex-grow-1';

    // Nombre / título
    const nameHeader = document.createElement('h5');
    nameHeader.className = 'mb-2';
    nameHeader.textContent = application.name;

    // Descripción
    const description = document.createElement('p');
    description.className = 'mb-2';
    description.textContent = application.description;

    // Contenedor de los tags (precio y localidad)
    const tagContainer = document.createElement('div');
    tagContainer.className = 'd-flex flex-wrap gap-2 mb-3';

    // Badge de precio
    const priceBadge = document.createElement('span');
    priceBadge.className = 'badge bg-secondary';
    priceBadge.textContent = application.price ? `${application.price} €` : 'Precio a acordar';

    // Badge de localidad
    const locationBadge = document.createElement('span');
    locationBadge.className = 'badge bg-secondary';
    locationBadge.textContent = application.location;

    tagContainer.appendChild(priceBadge);
    tagContainer.appendChild(locationBadge);

    // Tags extra (Fontanería, Urgente, etc.)
    if (application.tags && application.tags.length > 0) {
        application.tags.forEach(tag => {
            const tagBadge = document.createElement('span');
            tagBadge.className = 'badge bg-light text-dark border';
            tagBadge.textContent = tag;
            tagContainer.appendChild(tagBadge);
        });
    }

    // Agregamos al contenido
    content.appendChild(nameHeader);
    content.appendChild(description);
    content.appendChild(tagContainer);

    // Columna del botón VER CHAT
    const chatButtonContainer = document.createElement('div');
    chatButtonContainer.className = 'd-flex align-items-center justify-content-center mt-3 mt-md-0';

    const chatButton = document.createElement('button');
    chatButton.className = 'btn btn-primary btn-lg w-100 w-md-auto';
    chatButton.textContent = 'VER CHAT';
    chatButton.type = 'button';

    // Aquí podrías añadir un listener para ir al chat
    chatButton.addEventListener('click', () => {
        loadContent("chat.html", null, "")
    });

    chatButtonContainer.appendChild(chatButton);

    // Ensamblar la tarjeta completa
    card.appendChild(imageContainer);
    card.appendChild(content);
    card.appendChild(chatButtonContainer);

    return card;
}

/**
 * Función principal para renderizar todas las aplicaciones de reparación.
 */
function renderRepairCards() {
    const container = document.getElementById('repair-cards-container');
    if (container) {
        // Limpiar el contenedor
        container.innerHTML = '';
        
        // Crear y agregar una tarjeta por cada dato
        repairData.forEach(app => {
            const card = createRepairCard(app);
            container.appendChild(card);
        });
    }
}

// Ejecutar la función cuando el DOM esté completamente cargado
// document.addEventListener('DOMContentLoaded', renderRepairCards);

function onLoadMisReparaciones()
{
    renderRepairCards();
}
