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
        1250
    ),
    new Tutorial(
        2,
        102,
        "Ana Gómez",
        "https://www.youtube.com/watch?v=def456",
        "https://via.placeholder.com/400x200?text=HTML+CSS",
        "Aprende HTML y CSS creando tu primera web.",
        ["HTML", "CSS", "Diseño"],
        980
    ),
    new Tutorial(
        3,
        103,
        "Carlos Ruiz",
        "https://www.youtube.com/watch?v=ghi789",
        "https://via.placeholder.com/400x200?text=React",
        "Introducción práctica a React con ejemplos reales.",
        ["React", "JavaScript", "SPA"],
        2100
    ),
    new Tutorial(
        4,
        104,
        "Laura Martínez",
        "https://www.youtube.com/watch?v=jkl012",
        "https://via.placeholder.com/400x200?text=NodeJS",
        "Backend con Node.js y Express desde cero.",
        ["NodeJS", "Backend", "API"],
        1560
    ),
    new Tutorial(
        5,
        105,
        "Miguel Torres",
        "https://www.youtube.com/watch?v=mno345",
        "https://via.placeholder.com/400x200?text=SQL",
        "Bases de datos SQL para principiantes.",
        ["SQL", "Bases de datos", "Backend"],
        870
    )
];


document.addEventListener('DOMContentLoaded', () => {
    renderTutorialList(tutorials, document.querySelector('.tutorials-header-container'))
})

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
        alert("TODO!!")
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
