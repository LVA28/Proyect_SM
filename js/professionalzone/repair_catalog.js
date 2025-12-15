//Objeto: id, name, description, imageUrl, location, productTags, price, userId, interestedPersons
// import * as DP from "../sharedcontent/data_products.js"

// let productos = DP.generateRandomProducts();
// let productos = generateRandomProducts();    

function insertarProducto(productos) {
    limpiarPantalla();

    let catalogo = document.getElementById("catalog-container");

    // Verificamos si hay productos antes de iterar
    if (!productos || productos.length === 0) {
        catalogo.innerHTML = '<div class="text-center w-100 py-5 text-muted">No se encontraron reparaciones disponibles.</div>';
        return;
    }

    for (let i = 0; i < productos.length; i++) {
        // 1. Crear la tarjeta contenedora (Card de Bootstrap)
        let card = document.createElement("div");
        card.className = "card w-100 shadow-sm border-0 overflow-hidden"; // Estilo limpio con sombra suave
        card.style.cursor = "pointer"; // Indica que es clickable

        // 2. Crear la fila interna (Row) para diseño horizontal
        let row = document.createElement("div");
        row.className = "row g-0 align-items-center"; // g-0 quita espacios extra, align-items-center centra verticalmente

        // --- COLUMNA DE IMAGEN (Col-md-3) ---
        let colImg = document.createElement("div");
        colImg.className = "col-12 col-md-3 bg-light d-flex align-items-center justify-content-center";
        colImg.style.minHeight = "200px"; // Altura mínima para que se vea bien

        // Lógica para imagen: Si hay URL, usa <img>, si no, un placeholder
        if (productos[i].imageUrl) {
            let img = document.createElement("img");
            img.src = '/resources/images/repairings/' + productos[i].imageUrl;
            img.className = "img-fluid h-100 w-100 object-fit-cover";
            img.alt = productos[i].name;
            colImg.appendChild(img);
        } else {
            // Placeholder si no hay imagen
            let placeholder = document.createElement("span");
            placeholder.className = "text-muted fw-bold text-uppercase text-center p-3";
            placeholder.textContent = "Sin Imagen";
            colImg.appendChild(placeholder);
        }

        // --- COLUMNA DE CONTENIDO (Col-md-9) ---
        let colBody = document.createElement("div");
        colBody.className = "col-12 col-md-9";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column gap-2";

        // Encabezado: Nombre y Precio
        let headerDiv = document.createElement("div");
        headerDiv.className = "d-flex justify-content-between align-items-start";

        let title = document.createElement("h5");
        title.className = "card-title fw-bold mb-0 text-truncate";
        title.style.maxWidth = "70%";
        title.textContent = productos[i].name;

        let price = document.createElement("span");
        price.className = "badge bg-secondary fs-6"; // Etiqueta de precio estilo Bootstrap
        price.textContent = `${productos[i].price} €`;

        headerDiv.appendChild(title);
        headerDiv.appendChild(price);

        // Ubicación
        let location = document.createElement("p");
        location.className = "card-text text-body-secondary small mb-1";
        location.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg> ${productos[i].location}`;

        // Descripción
        let description = document.createElement("p");
        description.className = "card-text text-muted";
        // Limitamos la descripción visualmente a 2 líneas
        description.style.display = "-webkit-box";
        description.style.webkitLineClamp = "2";
        description.style.webkitBoxOrient = "vertical";
        description.style.overflow = "hidden";
        description.textContent = productos[i].description;

        // Botón de Chat (Alineado a la derecha o ancho completo en móvil)
        let actionDiv = document.createElement("div");
        actionDiv.className = "mt-auto d-flex justify-content-md-end";

        let btnChat = document.createElement("button");
        btnChat.className = "btn btn-primary px-4"; // Botón azul estándar
        btnChat.textContent = "INICIAR CHAT";
        
        // Evento del botón CHAT
        btnChat.onclick = (e) => {
            e.stopPropagation(); // Evita que se dispare el click de la tarjeta

            let chats = JSON.parse(sessionStorage.getItem("chats"))

            if(!productos[i].interestedPersons.includes(-1))
            {
                const nextChatId = Math.max(
                    ...chats
                        .map(c => Number(c.chatId))
                        .filter(id => !Number.isNaN(id))
                    ) + 1;



                productos[i].interestedPersons.push(-1)
                productos[i].interestedPersonsChats.push(nextChatId)

                sessionStorage.setItem("repairings", JSON.stringify(productos))
            }


            sessionStorage.setItem("repairId", productos[i].id);
            // Verificación de seguridad por si arrays son undefined
            let chatIndex = productos[i].interestedPersons ? productos[i].interestedPersons.indexOf(-1) : -1;
            let chatId = (chatIndex !== -1 && productos[i].interestedPersonsChats) ? productos[i].interestedPersonsChats[chatIndex] : null;
            
            sessionStorage.setItem("chatId", chatId);
            sessionStorage.setItem("userId", productos[i].userId);
            loadContent("chat.html", null, "9", 'professional');
        };

        actionDiv.appendChild(btnChat);

        // Construcción del árbol DOM
        cardBody.appendChild(headerDiv);
        cardBody.appendChild(location);
        cardBody.appendChild(description);
        cardBody.appendChild(actionDiv);

        colBody.appendChild(cardBody);
        row.appendChild(colImg);
        row.appendChild(colBody);
        card.appendChild(row);

        // Evento click en toda la tarjeta (Ir a detalle)
        card.addEventListener('click', () => {
            sessionStorage.setItem("repairId", productos[i].id);
            loadContent("repair-resume.html", null, "12", 'professional');
        });

        // Insertar en el catálogo
        catalogo.appendChild(card);
    }
}

function limpiarPantalla() {
    let catalogo = document.getElementById("catalog-container");
    if(catalogo){
        catalogo.innerHTML = "";
    }
}

function onLoadCatalogo()
{
    // Verificamos que exista el item en sessionStorage antes de parsear
    let storedData = sessionStorage.getItem("repairings");
    if (storedData) {
        let productos = JSON.parse(storedData);
        insertarProducto(productos);
    } else {
        console.warn("No se encontraron datos en 'repairings'");
        // Opcional: mostrar mensaje de vacío
        insertarProducto([]); 
    }
}