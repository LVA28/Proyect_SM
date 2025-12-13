'use strict'

let template;

function onLoadCatalogoDeTutoriales() {
    template = document.querySelector('#tutorial-header-template');
    
    // Intentamos cargar de sessionStorage
    let tutorials = JSON.parse(sessionStorage.getItem("tutorials"));

    // SI NO HAY DATOS (para probar el diseño), usamos estos de prueba:
    if (!tutorials || tutorials.length === 0) {
        console.warn("No hay tutoriales en sessionStorage, cargando datos de prueba...");
        tutorials = [
            {
                name: "Reparar Silla",
                bannerUrl: "https://via.placeholder.com/200x120", // Placeholder
                description: "Aprende a encolar una silla antigua paso a paso.",
                tags: ["Carpintería", "Básico"]
            },
            {
                name: "Cambiar Enchufe",
                bannerUrl: "", // Sin imagen
                description: "Tutorial rápido de electricidad doméstica.",
                tags: ["Electricidad", "Casa"]
            }
        ];
    }

    loadTutorialsHeaders(document.querySelector('.tutorials-container'), tutorials);
}

function loadTutorialsHeaders(container, tutorials) {
    container.innerHTML = ''; // Limpiar contenedor por si acaso
    tutorials.forEach(n => loadTutorialHeader(container, n));
}

function loadTutorialHeader(container, tutorial) {
    const cardElement = createTutorialHeader(tutorial);
    
    // Evento Click
    cardElement.querySelector('.tutorial-card').addEventListener('click', () => {
        // Asumo que loadContent es una función global tuya definida en otro sitio
        if (typeof loadContent === "function") {
            loadContent("nuevo-tutorial.html", null, "");
        } else {
            console.log("Navegando a nuevo-tutorial.html...");
            window.location.href = "nuevo-tutorial.html"; // Fallback
        }
    });

    container.appendChild(cardElement);
}

function createTutorialHeader(tutorial) {
    // Clonar el template
    const copy = template.content.cloneNode(true);

    // Rellenar Nombre
    copy.querySelector('.name').textContent = tutorial.name;
    
    // Rellenar Imagen (si no hay URL, ponemos un placeholder gris o texto)
    const img = copy.querySelector('.repair-image');
    if (tutorial.bannerUrl) {
        img.src = tutorial.bannerUrl;
    } else {
        img.style.display = 'none'; // Ocultar imagen rota si no hay URL
        // Opcional: poner un texto dentro del contenedor de imagen
    }

    // Rellenar Descripción
    copy.querySelector('.description').textContent = tutorial.description;
    
    // Rellenar Tags
    let tagsContainer = copy.querySelector('.tags-container');
    // Limpiar tags previos del template si hubiera
    tagsContainer.innerHTML = ''; 
    
    if (tutorial.tags && Array.isArray(tutorial.tags)) {
        tutorial.tags.forEach(n => {
            const tag = document.createElement('p'); // Usamos P o SPAN según prefieras, CSS lo maneja
            tag.classList.add('tag');
            tag.textContent = n;
            tagsContainer.appendChild(tag);
        });
    }

    return copy;
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', onLoadCatalogoDeTutoriales);