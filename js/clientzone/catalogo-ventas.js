
// 2. Función para crear la tarjeta (Estructura de 3 columnas del wireframe)
function createSaleCard(product) {
    const card = document.createElement('div');
    // Borde negro suave para simular el estilo del wireframe
    card.className = 'card border border-dark mb-3'; 
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const row = document.createElement('div');
    row.className = 'row g-3 align-items-center';

    // --- COLUMNA 1: Info (Cajas separadas) ---
    const colInfo = document.createElement('div');
    colInfo.className = 'col-md-3 d-flex flex-column gap-2';

    const createBox = (text) => {
        const box = document.createElement('div');
        box.className = 'border border-dark p-2 text-center fw-bold'; // Estilo "caja"
        box.textContent = text;
        return box;
    };

    colInfo.appendChild(createBox(product.name));
    colInfo.appendChild(createBox(product.price));
    colInfo.appendChild(createBox(product.location));

    // --- COLUMNA 2: Imagen ---
    const colImg = document.createElement('div');
    colImg.className = 'col-md-4';
    
    const imgPlaceholder = document.createElement('div');
    imgPlaceholder.className = 'd-flex justify-content-center align-items-center border border-dark';
    imgPlaceholder.style.height = '150px';
    imgPlaceholder.innerHTML = '<span class="text-secondary text-center">PRIMERA IMAGEN</span>';
    
    colImg.appendChild(imgPlaceholder);

    // --- COLUMNA 3: Etiquetas y Descripción ---
    const colDesc = document.createElement('div');
    colDesc.className = 'col-md-5 d-flex flex-column gap-2';

    // Caja Etiquetas
    const tagsBox = document.createElement('div');
    tagsBox.className = 'border border-dark p-2 text-uppercase';
    tagsBox.innerHTML = `<strong>Etiquetas:</strong> ${product.tags.join(", ")}`;

    // Caja Descripción
    const descBox = document.createElement('div');
    descBox.className = 'border border-dark p-3 flex-grow-1';
    descBox.style.minHeight = '80px';
    descBox.innerHTML = `<strong>Descripción:</strong><br><small>${product.description}</small>`;

    colDesc.appendChild(tagsBox);
    colDesc.appendChild(descBox);

    // Ensamblar
    row.appendChild(colInfo);
    row.appendChild(colImg);
    row.appendChild(colDesc);
    cardBody.appendChild(row);
    card.appendChild(cardBody);

    return card;
}

// 3. Renderizado
function renderSalesCards(salesData) {
    const container = document.getElementById('sales-cards-container');
    if (container) {
        container.innerHTML = '';
        salesData.forEach(item => {
            container.appendChild(createSaleCard(item));
        });
    }
}

// 4. Lógica de Filtros (Precio y Fecha)
function setupSortListeners() {
    // Extraer número del precio
    const getPrice = (p) => parseInt(p.price.replace(/\D/g, ''));

    // Precio Ascendente
    document.getElementById('sort-price-asc').addEventListener('click', (e) => {
        e.preventDefault();
        salesData.sort((a, b) => getPrice(a) - getPrice(b));
        document.getElementById('btn-price-label').textContent = 'Precio: Menor a Mayor';
        renderSalesCards();
    });

    // Precio Descendente
    document.getElementById('sort-price-desc').addEventListener('click', (e) => {
        e.preventDefault();
        salesData.sort((a, b) => getPrice(b) - getPrice(a));
        document.getElementById('btn-price-label').textContent = 'Precio: Mayor a Menor';
        renderSalesCards();
    });

    // Fecha Reciente
    document.getElementById('sort-date-new').addEventListener('click', (e) => {
        e.preventDefault();
        salesData.sort((a, b) => new Date(b.date) - new Date(a.date));
        document.getElementById('btn-date-label').textContent = 'Fecha: Más Reciente';
        renderSalesCards();
    });

    // Fecha Antigua
    document.getElementById('sort-date-old').addEventListener('click', (e) => {
        e.preventDefault();
        salesData.sort((a, b) => new Date(a.date) - new Date(b.date));
        document.getElementById('btn-date-label').textContent = 'Fecha: Más Antigua';
        renderSalesCards();
    });
}

function onLoadCatalogoDeObjetosALaVenta() {
    // Inicialización
    let salesData = JSON.parse(sessionStorage.getItem("products"))
    renderSalesCards(salesData);
    setupSortListeners();
}

