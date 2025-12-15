'use strict'

let searchInput;
let filterViews;
let filterDate;

let currentFilterViews;
let currentFilterDate;
let lastSearchValue = "";
let container;

let visualTutorials = [];

function onLoadMisTutoriales() {
  // Si no hay datos en sessionStorage, iniciamos con array vacío para evitar crash
  let storedData = sessionStorage.getItem("mytutorials");
  let tutorials = storedData ? JSON.parse(storedData) : [];

  visualTutorials = tutorials;
  container = document.querySelector('.tutorials-list');

  searchInput = document.querySelector('.search-input')

  let addNewBtn = document.querySelector('#add-new-button');
  if (addNewBtn) {
    addNewBtn.addEventListener('click', () => {
      sessionStorage.setItem("tutorialId", "new")
      loadContent("nuevo-tutorial.html", null, "10", 'professional')
    })
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key == "Enter" && searchInput.value !== lastSearchValue) {
        visualTutorials = filterTutorials(searchInput.value)
        renderTutorialList(visualTutorials, container)
        lastSearchValue = searchInput.value
      }
    })
  }

  renderTutorialList(tutorials, container)
}

function orderTutorialsByViews(descendent = true) {
  return [...visualTutorials].sort((a, b) => {
    return descendent
      ? b.viewsCounter - a.viewsCounter
      : a.viewsCounter - b.viewsCounter;
  });
}

function orderTutorialsByDate(descendent = true) {
  return [...visualTutorials].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return descendent
      ? dateB - dateA
      : dateA - dateB;
  });
}

function filterTutorials(filterString = "") {
  const search = filterString.trim().toLowerCase();

  // Se usa visualTutorials o tutorials global (asumiendo que tutorials está definido en el scope global si existe)
  // Como 'tutorials' no es global en este snippet, usamos 'visualTutorials' como base o lo pasamos como arg.
  // Para este fix, asumiremos visualTutorials tiene todo si no se ha filtrado antes.
  let source = JSON.parse(sessionStorage.getItem("mytutorials")) || [];

  if (!search) return source;

  return source.filter(tutorial => {
    const inName = tutorial.name.toLowerCase().includes(search);
    const inDescription = tutorial.description.toLowerCase().includes(search);
    const inTags = tutorial.tags.some(tag =>
      tag.toLowerCase().includes(search)
    );

    return inName || inDescription || inTags;
  });
}

function renderTutorialList(tutorialsArray, container) {
  if (!container) return;
  container.innerHTML = "";

  if (tutorialsArray.length === 0) {
    container.innerHTML = '<div class="text-center p-5 text-muted">No hay tutoriales disponibles.</div>';
    return;
  }

  tutorialsArray.forEach(tutorial => {
    renderSingleTutorial(tutorial, container, tutorialsArray);
  });
}


function renderSingleTutorial(tutorial, container, tutorialsArray) {
  const template = document.getElementById("tutorial-header-template");
  // Seleccionamos el .tutorial-header que ahora es la Card de Bootstrap
  const clone = template.content.cloneNode(true).querySelector(".tutorial-header");

  // Evento click en la tarjeta entera para ir al detalle
  clone.addEventListener("click", (e) => {
    // Evitar que se dispare si clicamos en borrar
    if (e.target.closest('.delete-tutorial')) return;

    sessionStorage.setItem("tutorialId", tutorial.id)
    loadContent("nuevo-tutorial.html", null, "10", 'professional')
  });

  const img = clone.querySelector(".tutorial-image");
  if (img) {
    img.src = '/resources/images/tutorials/banners/' + tutorial.bannerUrl || "https://via.placeholder.com/400x300?text=Sin+Imagen";
    img.alt = tutorial.name;
  }

  const authorEl = clone.querySelector(".tutorial-author");
  if (authorEl) authorEl.textContent = tutorial.name;

  const descEl = clone.querySelector(".tutorial-description");
  if (descEl) descEl.textContent = tutorial.description;

  const tagsContainer = clone.querySelector(".tutorial-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = "";
    tutorial.tags.forEach(tag => {
      const span = document.createElement("span");
      // AÑADIDO: Clases Bootstrap para que se vean como etiquetas bonitas
      span.className = "badge bg-secondary text-uppercase";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });
  }

  const deleteBtn = clone.querySelector('.delete-tutorial');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar abrir el tutorial al borrar

      if (confirm("¿Estás seguro de que quieres borrar este tutorial?")) {
        tutorialsArray.splice(tutorialsArray.indexOf(tutorial), 1)
        sessionStorage.setItem("mytutorials", JSON.stringify(tutorialsArray))
        clone.remove();

        // Si nos quedamos vacíos, volver a renderizar para mostrar mensaje
        if (tutorialsArray.length === 0) renderTutorialList([], container);
      }
    });
  }

  container.appendChild(clone);
}