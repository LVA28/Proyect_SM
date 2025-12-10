'use strict'

let template;

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

document.addEventListener('DOMContentLoaded', () => 
{
    template = document.querySelector('#tutorial-header-template')
    consloe.log("nsns")
    loadTutorialsHeaders(document.querySelector('.tutorials-container'), tutorials)
})

function loadTutorialsHeaders(container, tutorials)
{
    tutorials.forEach(n => loadTutorialHeader(container, n))
}

function loadTutorialHeader(container, tutorial)
{
    const template = createTutorialHeader(tutorial)
    template.querySelector('.tutorial-header').addEventListener('click', () =>{
        alert("tODO!!")
    })

    container.appendChild(template)
}

function createTutorialHeader(tutorial)
{
    const copy = template.content.cloneNode(true)
    copy.querySelector('.name').textContent = tutorial.name;
    copy.querySelector('.repair-image').src = tutorial.bannerUrl;
    copy.querySelector('.description').textContent = tutorial.description;
    let tagsContainer = copy.querySelector('.tags-container')
    tutorial.tags.forEach(n => {
        const tag = document.createElement('p')
        tag.classList.add('tag')
        tag.textContent = n
        tagsContainer.appendChild(tag)
    })
    return copy
}