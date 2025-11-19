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
    return copy
}