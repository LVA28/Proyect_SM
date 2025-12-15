'use strict'

let template;

// Función principal que se ejecuta al cargar
function onLoadCatalogoDeTutoriales() {
    template = document.querySelector('#tutorial-header-template');
    
    // 1. Intentamos leer de la memoria
    let tutorials = JSON.parse(sessionStorage.getItem("tutorials"));

    // 2. ¡EL ARREGLO! Si la memoria está vacía (null), usamos datos falsos
    if (!tutorials || tutorials.length === 0) {
        console.warn("No hay datos en sessionStorage. Cargando DATOS DE PRUEBA...");
        tutorials = [
            {
                name: "Reparación de Grifo",
                description: "Aprende a arreglar un grifo que gotea en 10 minutos.",
                tags: ["Fontanería", "Baño"],
                bannerUrl: "https://via.placeholder.com/200x120?text=Grifo" // Imagen gris de prueba
            },
            {
                name: "Restaurar Silla",
                description: "Cómo lijar y barnizar una silla de madera antigua.",
                tags: ["Carpintería", "Restauración"],
                bannerUrl: "https://via.placeholder.com/200x120?text=Silla"
            },
            {
                name: "Cambiar Pantalla Móvil",
                description: "Guía paso a paso para cambiar el cristal de tu smartphone.",
                tags: ["Tecnología", "Avanzado"],
                bannerUrl: "https://via.placeholder.com/200x120?text=Movil"
            }
        ];
    }

    // 3. Pintamos los datos (sean los de memoria o los de prueba)
    loadTutorialsHeaders(document.querySelector('.tutorials-container'), tutorials);
}


function loadTutorialsHeaders(container, tutorials) {
    // Limpiamos el contenedor antes de añadir nada por si acaso
    if(container) {
        container.innerHTML = ''; 
        tutorials.forEach(n => loadTutorialHeader(container, n));
    } else {
        console.error("No encuentro el div .tutorials-container en el HTML");
    }
}

function loadTutorialHeader(container, tutorial) {
    if (!template) return;

    const cardElement = createTutorialHeader(tutorial);
    
    // Al hacer clic, vamos al detalle
    cardElement.querySelector('.tutorial-card').addEventListener('click', () => {
        // Redirección simple si no tienes la función loadContent
        sessionStorage.setItem("videoId", tutorial.id)
        loadContent("video-player.html", null, "13", 'client') 
    });

    container.appendChild(cardElement);
}

function createTutorialHeader(tutorial) {
    const copy = template.content.cloneNode(true);

    // Rellenar Nombre
    copy.querySelector('.name').textContent = tutorial.name;
    
    // Rellenar Imagen
    const img = copy.querySelector('.repair-image');
    if (img) {
        img.src = '/resources/images/tutorials/banners/' + tutorial.bannerUrl || "https://via.placeholder.com/200x120"; // Imagen por defecto si falla
    }

    // Rellenar Descripción
    copy.querySelector('.description').textContent = tutorial.description;
    
    // Rellenar Etiquetas
    let tagsContainer = copy.querySelector('.tags-container');
    tagsContainer.innerHTML = ''; // Limpiar basura
    
    if (tutorial.tags) {
        tutorial.tags.forEach(n => {
            const tag = document.createElement('p');
            tag.classList.add('tag'); // Asegúrate que tu CSS tiene estilo para .tag
            tag.textContent = n;
            tagsContainer.appendChild(tag);
        });
    }

    return copy;
}

// ESTO ES CLAVE: Ejecutar la función cuando el HTML esté listo
document.addEventListener('DOMContentLoaded', onLoadCatalogoDeTutoriales);