'use strict'

let template;

document.addEventListener('DOMContentLoaded', () => 
{
    template = document.querySelector('#tutorial-header-template')
})

function loadTutorialsHeaders(tutorials)
{

}

function loadTutorialHeader(container, tutorial)
{
    const template = createTutorialHeader(tutorial)

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