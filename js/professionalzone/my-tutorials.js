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
    let tutorials = JSON.parse(sessionStorage.getItem("mytutorials"))

    visualTutorials = tutorials;
    container = document.querySelector('.tutorials-header-container');
    filterViews = document.querySelector('#filter-by-views')
    filterDate = document.querySelector('#filter-by-date')

    currentFilterViews = filterViews.value
    currentFilterDate = filterDate.value

    searchInput = document.querySelector('.search-input')
    document.querySelector('#add-new-button').addEventListener('click', () =>{
        sessionStorage.setItem("tutorialId", "new")
        loadContent("nuevo-tutorial.html", null, "10")
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
        renderSingleTutorial(tutorial, container, tutorialsArray);
    });
}


function renderSingleTutorial(tutorial, container, tutorialsArray) {
    const template = document.getElementById("tutorial-header-template");
    const clone = template.content.cloneNode(true).querySelector(".tutorial-header");


    clone.addEventListener("click", () => {
        sessionStorage.setItem("tutorialId", tutorial.id)
        loadContent("nuevo-tutorial.html", null, "10", 'professional')
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

    clone.querySelector('.delete-tutorial').addEventListener('click', (e) => {
        e.stopPropagation();

        tutorialsArray.splice(tutorialsArray.indexOf(tutorial), 1)

        sessionStorage.setItem("mytutorials", JSON.stringify(tutorialsArray))

        clone.remove();
    })

    container.appendChild(clone);
}
