'use strict'


const tutorials = [
    new Tutorial(
        1,
        101,
        "Juan Pérez",
        "https://www.youtube.com/watch?v=abc123",
        "https://via.placeholder.com/400x200?text=JavaScript",
        "Curso completo de JavaScript desde cero.",
        ["JavaScript", "Web", "Frontend"],
        1250,
        new Date(2024, 10, 15)
    ),
    new Tutorial(
        2,
        102,
        "Ana Gómez",
        "https://www.youtube.com/watch?v=def456",
        "https://via.placeholder.com/400x200?text=HTML+CSS",
        "Aprende HTML y CSS creando tu primera web.",
        ["HTML", "CSS", "Diseño"],
        980,
        new Date(2023, 5, 20, 14, 30, 0)
    ),
    new Tutorial(
        3,
        103,
        "Carlos Ruiz",
        "https://www.youtube.com/watch?v=ghi789",
        "https://via.placeholder.com/400x200?text=React",
        "Introducción práctica a React con ejemplos reales.",
        ["React", "JavaScript", "SPA"],
        2100,
        new Date(2022, 10, 15)
    ),
    new Tutorial(
        4,
        104,
        "Laura Martínez",
        "https://www.youtube.com/watch?v=jkl012",
        "https://via.placeholder.com/400x200?text=NodeJS",
        "Backend con Node.js y Express desde cero.",
        ["NodeJS", "Backend", "API"],
        1560,
        new Date(2024, 8, 5)
    ),
    new Tutorial(
        5,
        105,
        "Miguel Torres",
        "https://www.youtube.com/watch?v=mno345",
        "https://via.placeholder.com/400x200?text=SQL",
        "Bases de datos SQL para principiantes.",
        ["SQL", "Bases de datos", "Backend"],
        870,
        new Date(2023, 1, 2)
    )
];

let searchInput;
let filterViews;
let filterDate;

let currentFilterViews;
let currentFilterDate;
let lastSearchValue = "";
let container;

let visualTutorials = [];

function onLoadMisTutoriales() {
    visualTutorials = tutorials;
    container = document.querySelector('.tutorials-header-container');
    filterViews = document.querySelector('#filter-by-views')
    filterDate = document.querySelector('#filter-by-date')

    currentFilterViews = filterViews.value
    currentFilterDate = filterDate.value

    searchInput = document.querySelector('.search-input')
    document.querySelector('#add-new-button').addEventListener('click', () =>{
        loadContent("nuevo-tutorial.html", null, "")
    })
    searchInput.addEventListener('keydown', (e) =>{
        if (e.key == "Enter" && searchInput.value !== lastSearchValue)
        {
            visualTutorials = filterTutorials(searchInput.value)
            renderTutorialList(visualTutorials, container)
            lastSearchValue = searchInput.value
        }
    })

    filterViews.addEventListener('change', (e) =>{
        if (e.target.value !== currentFilterViews)
        {
            currentFilterViews = e.target.value
            visualTutorials = orderTutorialsByViews(currentFilterViews === 'Más visitas')
            //Buenas. Si alguien del equipo se le ocurre pasar por aquí, POR FAVOR, no cometáis esta atrocidad que estáis presenciando ante vosotros. Esto es el resultado de alguien que lleva todo el día encerrado en la uni trabajando. Es preferible sufrir un rodillazo en los huevos a hacer esto
            renderTutorialList(visualTutorials, container)
        }
    })

    filterDate.addEventListener('change', (e) =>{
        if (e.target.value !== currentFilterDate)
        {
            currentFilterDate = e.target.value
            visualTutorials = orderTutorialsByDate(currentFilterDate === 'Más reciente')
            //Buenas. Si alguien del equipo se le ocurre pasar por aquí, POR FAVOR, no cometáis esta atrocidad que estáis presenciando ante vosotros. Esto es el resultado de alguien que lleva todo el día encerrado en la uni trabajando. Es preferible sufrir un rodillazo en los huevos a hacer esto
            renderTutorialList(visualTutorials, container)
        }
    })


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
      ? dateB - dateA   // más reciente primero
      : dateA - dateB;  // más antiguo primero
  });
}
function filterTutorials(filterString = "") {
    console.log("filtrando por " + filterString)
  const search = filterString.trim().toLowerCase();

  if (!search) return [...tutorials];

  return tutorials.filter(tutorial => {
    const inName = tutorial.name.toLowerCase().includes(search);
    const inDescription = tutorial.description.toLowerCase().includes(search);
    const inTags = tutorial.tags.some(tag => 
      tag.toLowerCase().includes(search)
    );

    return inName || inDescription || inTags;
  });
}
function renderTutorialList(tutorialsArray, container) {
    container.innerHTML = ""; // Limpia el container (opcional)

    tutorialsArray.forEach(tutorial => {
        renderSingleTutorial(tutorial, container);
    });
}


function renderSingleTutorial(tutorial, container) {
    const template = document.getElementById("tutorial-header-template");
    const clone = template.content.cloneNode(true);

    const tutorialElement = clone.querySelector(".tutorial-header");

    tutorialElement.addEventListener("click", () => {
        loadContent("nuevo-tutorial.html", null, "")
    });

    const img = clone.querySelector(".tutorial-image");
    img.src = tutorial.bannerUrl;
    img.alt = tutorial.name;

    clone.querySelector(".tutorial-author").textContent = tutorial.name;

    clone.querySelector(".tutorial-description").textContent = tutorial.description;

    const tagsContainer = clone.querySelector(".tutorial-tags");
    tagsContainer.innerHTML = "";

    tutorial.tags.forEach(tag => {
        const span = document.createElement("span");
        span.classList.add("tutorial-tag");
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    container.appendChild(clone);
}
