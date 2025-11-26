const productsData = [
    {
        id: 1,
        name: "Taladro Percutor",
        price: "45€ / día",
        location: "Madrid",
        tags: ["Herramientas", "Construcción"],
        description: "Taladro profesional en perfecto estado. Incluye maletín y brocas básicas."
    },
    {
        id: 2,
        name: "Cámara Réflex Canon",
        price: "30€ / día",
        location: "Barcelona",
        tags: ["Fotografía", "Electrónica"],
        description: "Cámara ideal para sesiones de fotos y video. Incluye objetivo 18-55mm."
    },
    {
        id: 3,
        name: "Bicicleta de Montaña",
        price: "15€ / día",
        location: "Valencia",
        tags: ["Deporte", "Aire libre"],
        description: "Bicicleta talla M con suspensión delantera. Revisión recién hecha."
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    // Borde negro grueso como en el diseño original si quieres, o suave como bootstrap
    card.className = 'card border shadow-sm mb-3'; 
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Usamos Grid de Bootstrap (Row) para las 3 columnas
    const row = document.createElement('div');
    row.className = 'row g-3 align-items-center';

    // --- COLUMNA 1: Info (Nombre, Precio, Localidad) ---
    const colInfo = document.createElement('div');
    colInfo.className = 'col-md-3 d-flex flex-column gap-2';

    // Función auxiliar para crear las "cajas" de texto con borde
    const createInfoBox = (text) => {
        const box = document.createElement('div');
        box.className = 'border p-2 text-center rounded fw-bold bg-light';
        box.textContent = text;
        return box;
    };

    colInfo.appendChild(createInfoBox(product.name));
    colInfo.appendChild(createInfoBox(product.price));
    colInfo.appendChild(createInfoBox(product.location));

    const colImg = document.createElement('div');
    colImg.className = 'col-md-4';
    
    const imgPlaceholder = document.createElement('div');
    imgPlaceholder.className = 'd-flex justify-content-center align-items-center border bg-light';
    imgPlaceholder.style.height = '150px'; // Altura fija similar al diseño
    imgPlaceholder.style.width = '100%';
    imgPlaceholder.innerHTML = '<span class="text-secondary text-center">PRIMERA IMAGEN</span>';
    
    colImg.appendChild(imgPlaceholder);


    // --- COLUMNA 3: Etiquetas y Descripción ---
    const colDesc = document.createElement('div');
    colDesc.className = 'col-md-5 d-flex flex-column gap-2';

    // Etiquetas (Caja superior)
    const tagsBox = document.createElement('div');
    tagsBox.className = 'border p-2 bg-light';
    // Unimos los tags con comas o espacios
    tagsBox.innerHTML = `<strong>Etiquetas:</strong> ${product.tags.join(", ")}`;

    // Descripción (Caja inferior más grande)
    const descBox = document.createElement('div');
    descBox.className = 'border p-3 bg-light flex-grow-1';
    descBox.style.minHeight = '80px';
    descBox.innerHTML = `<strong>Descripción:</strong><br><small>${product.description}</small>`;

    colDesc.appendChild(tagsBox);
    colDesc.appendChild(descBox);


    // Ensamblar columnas en la fila
    row.appendChild(colInfo);
    row.appendChild(colImg);
    row.appendChild(colDesc);

    // Ensamblar fila en el cuerpo y cuerpo en la tarjeta
    cardBody.appendChild(row);
    card.appendChild(cardBody);

    return card;
}

/**
 * Función principal para renderizar
 */
function renderProductCards() {
    const container = document.getElementById('products-cards-container');
    if (container) {
        container.innerHTML = '';
        productsData.forEach(prod => {
            const card = createProductCard(prod);
            container.appendChild(card);
        });
    }
}

document.addEventListener('DOMContentLoaded', renderProductCards);