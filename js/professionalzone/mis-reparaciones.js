// Simulación de datos de reparación
const repairData = [
    new RepairApplication(
        101,
        1,
        "Arreglo de Fuga en Tubería",
        "placeholder",
        "Madrid",
        "Necesito un fontanero urgente para una pequeña fuga en el baño.",
        ["Fontanería", "Urgente", "24h"],
        [2, 3]
    ),
    new RepairApplication(
        102,
        1,
        "Pintar Salón y Habitación",
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
        "placeholder",
        "Valencia",
        "Añadir un nuevo punto de electricidad en la cocina.",
        ["Electricidad"],
        []
    )
];

/**
 * Función para crear el elemento HTML de una tarjeta de reparación.
 * @param {RepairApplication} application - Objeto de la aplicación de reparación.
 * @returns {HTMLElement} El elemento div que contiene la tarjeta de reparación.
 */
function createRepairCard(application) {
    // Usamos 'd-flex' para el contenedor principal de cada tarjeta
    const card = document.createElement('div');
    card.className = 'd-flex flex-column flex-md-row p-3 border rounded shadow-sm bg-white';
    card.id = `repair-${application.id}`;

    // Contenedor de la Imagen (simulando el bloque gris)
    const imageContainer = document.createElement('div');
    imageContainer.className = 'd-flex justify-content-center align-items-center me-md-3 mb-3 mb-md-0 border rounded flex-shrink-0';
    imageContainer.style.width = '200px'; // Ancho fijo para simular el bloque
    imageContainer.style.height = '120px'; // Alto fijo
    imageContainer.innerHTML = '<strong class="text-secondary">PRIMERA IMAGEN</strong>';

    // Contenido de la Reparación (Nombre y Tags)
    const content = document.createElement('div');
    content.className = 'flex-grow-1';

    // Nombre/Título
    const nameHeader = document.createElement('h5');
    nameHeader.className = 'mb-2';
    nameHeader.textContent = application.name;

    // Contenedor de los Tags (Precio y Localidad)
    const tagContainer = document.createElement('div');
    tagContainer.className = 'd-flex flex-wrap gap-2 mb-3';

    // Botón de Precio (simulado)
    const priceBadge = document.createElement('span');
    priceBadge.className = 'badge bg-secondary';
    priceBadge.textContent = 'Precio';

    // Botón de Localidad (simulado)
    const locationBadge = document.createElement('span');
    locationBadge.className = 'badge bg-secondary';
    locationBadge.textContent = application.location;
    
    tagContainer.appendChild(priceBadge);
    tagContainer.appendChild(locationBadge);

    // Agregamos Nombre y Tags al Contenido
    content.appendChild(nameHeader);
    content.appendChild(tagContainer);

    // Columna del Botón VER CHAT
    const chatButtonContainer = document.createElement('div');
    chatButtonContainer.className = 'd-flex align-items-center justify-content-center mt-3 mt-md-0';

    const chatButton = document.createElement('button');
    chatButton.className = 'btn btn-primary btn-lg w-100 w-md-auto';
    chatButton.textContent = 'VER CHAT';
    // Nota: El estilo de la imagen no es fácil de replicar exactamente sin CSS, 
    // pero el botón azul grande de Bootstrap es el más cercano.

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
document.addEventListener('DOMContentLoaded', renderRepairCards);