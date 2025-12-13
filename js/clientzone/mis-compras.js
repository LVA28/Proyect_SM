// Simulación de datos: Productos artesanales y locales

function createProductCard(product, productList) {
    const card = document.createElement('div');
    card.className = 'card border shadow-sm mb-3'; 
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const row = document.createElement('div');
    row.className = 'row g-3 align-items-center';

    // --- COLUMNA 1: Info (Nombre, Precio, Localidad) ---
    const colInfo = document.createElement('div');
    colInfo.className = 'col-md-3 d-flex flex-column gap-2';

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
    imgPlaceholder.style.height = '150px';
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

    const seeChat = document.createElement('button');
    seeChat.textContent = "Ver Chat"

    seeChat.addEventListener('click', () =>{

        sessionStorage.setItem("repairId", product.id)
        sessionStorage.setItem("chatId", product.interestedPersonsChats[product.interestedPersons.indexOf(-1)])
        sessionStorage.setItem("userId", product.userId)
        loadContent("chat.html", null, "9", 'client')

    })

    // Ensamblar columnas en la fila
    row.appendChild(colInfo);
    row.appendChild(colImg);
    row.appendChild(colDesc);
    row.appendChild(seeChat);

    // Ensamblar fila en el cuerpo y cuerpo en la tarjeta
    cardBody.appendChild(row);
    card.appendChild(cardBody);

    return card;
}

/**
Función principal para renderizar
 */
function renderProductCards(productsData) {
    const container = document.getElementById('products-cards-container');
    if (container) {
        container.innerHTML = '';
        productsData.forEach(prod => {
            const card = createProductCard(prod, productsData);
            container.appendChild(card);
        });
    }
}

// 4. Lógica de Ordenación
function setupSortListeners() {
    // Helper para sacar el número del precio (quita el "€ / día")
    const getPrice = (p) => parseInt(p.price.replace(/\D/g, ''));

    // Precio: Menor a Mayor
    document.getElementById('sort-price-asc').addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la página salte al inicio
        productsData.sort((a, b) => getPrice(a) - getPrice(b));
        updateLabel('btn-price-label', 'Precio: Menor a Mayor');
        renderProductCards();
    });

    // Precio: Mayor a Menor
    document.getElementById('sort-price-desc').addEventListener('click', (e) => {
        e.preventDefault();
        productsData.sort((a, b) => getPrice(b) - getPrice(a));
        updateLabel('btn-price-label', 'Precio: Mayor a Menor');
        renderProductCards();
    });

    // Fecha: Más Reciente
    document.getElementById('sort-date-new').addEventListener('click', (e) => {
        e.preventDefault();
        // Ordenar fechas descendente (más nuevo primero)
        productsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        updateLabel('btn-date-label', 'Fecha: Más Reciente');
        renderProductCards();
    });

    // Fecha: Más Antigua
    document.getElementById('sort-date-old').addEventListener('click', (e) => {
        e.preventDefault();
        // Ordenar fechas ascendente (más viejo primero)
        productsData.sort((a, b) => new Date(a.date) - new Date(b.date));
        updateLabel('btn-date-label', 'Fecha: Más Antigua');
        renderProductCards();
    });
}

// Función auxiliar para cambiar el texto del botón y saber qué filtro está activo
function updateLabel(btnId, text) {
    document.getElementById(btnId).textContent = text;
}


// Inicialización
function onLoadMisCompras()
{
    let productsData = JSON.parse(sessionStorage.getItem("products")).filter(n => n.interestedPersons.includes(-1))
    renderProductCards(productsData);
    // setupSortListeners();
}
