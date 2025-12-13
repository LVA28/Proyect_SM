'use strict'

let repairImage;
let repairPrice;
let repairName;
let repairLocation;
let repairDescription;
let repairTagsContainer;

function onLoadRepairResume() {

    let repair = JSON.parse(sessionStorage.getItem("repairings")).filter(n => n.id == sessionStorage.getItem("repairId"))[0]

    repairImage = document.querySelector('.repair-image');
    repairPrice = document.querySelector('.repair-price');
    repairName = document.querySelector('.repair-name');
    repairLocation = document.querySelector('.repair-location');
    repairDescription = document.querySelector('.repair-description');
    repairTagsContainer = document.querySelector('.tags-container');

    fillForm(repair)

    document.querySelector('#start-chat').addEventListener('click', () => {
        sessionStorage.setItem("repairId", repair.id)
        sessionStorage.setItem("chatId", repair.interestedPersonsChats[repair.interestedPersons.indexOf(-1)])
        sessionStorage.setItem("userId", repair.userId)
        loadContent("chat.html", null, "9", 'professional')
    })
}

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