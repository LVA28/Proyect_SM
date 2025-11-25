'use strict'

let repairImage;
let repairPrice;
let repairName;
let repairLocation;
let repairDescription;
let repairTagsContainer;

document.addEventListener('DOMContentLoaded', () => {
    repairImage = document.querySelector('.repair-image');
    repairPrice = document.querySelector('.repair-price');
    repairName = document.querySelector('.repair-name');
    repairLocation = document.querySelector('.repair-location');
    repairDescription = document.querySelector('.repair-description');
    repairTagsContainer = document.querySelector('.tags-container');

    document.querySelector('#start-chat').addEventListener('click', goToChat)
})

function fillForm(dataObject)
{
    repairImage.src = dataObject.imageUrl;
    repairPrice.textContent = dataObject.price
    repairName.textContent = dataObject.name
    repairLocation.textContent = dataObject.location
    repairDescription.textContent = dataObject.description
    
    dataObject.tags.forEach(n => {
        const tag = document.createElement('p')
        tag.classList.add('tag')
        tag.textContent = n
        repairTagsContainer.appendChild(tag)
    })
}

function goToChat()
{
    alert('TODO!!!')
}