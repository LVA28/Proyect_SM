'use strict'

let template;


function loadTutorialsHeaders(container, tutorials)
{
    tutorials.forEach(n => loadTutorialHeader(container, n))
}

function loadTutorialHeader(container, tutorial)
{
    const template = createTutorialHeader(tutorial)
    template.querySelector('.tutorial-header').addEventListener('click', () =>{
        loadContent("nuevo-tutorial.html", null, "")
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

function onLoadCatalogoDeTutoriales()
{
    let tutorials = JSON.parse(sessionStorage.getItem("tutorials"))
    template = document.querySelector('#tutorial-header-template')
    loadTutorialsHeaders(document.querySelector('.tutorials-container'), tutorials)
}

