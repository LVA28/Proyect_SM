'use strict'

let repairImage;
let repairPrice;
let repairName;
let repairLocation;
let repairDescription;
let repairTagsContainer;
let interestedList;

function onLoadObjectResume() {
    let repairs = JSON.parse(sessionStorage.getItem("myproducts"))
    let repair = repairs.filter(n => n.id == sessionStorage.getItem("productId"))[0]

    repairImage = document.querySelector('.repair-image');
    repairPrice = document.querySelector('.repair-price');
    repairName = document.querySelector('.repair-name');
    repairLocation = document.querySelector('.repair-location');
    repairDescription = document.querySelector('.repair-description');
    repairTagsContainer = document.querySelector('.tags-container');
    interestedList = document.querySelector('#interested-list');

    fillForm(repair)
}

function fillForm(dataObject)
{
    repairImage.src = '/resources/images/products/' + dataObject.imageUrl;
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

    dataObject.interestedPersons.forEach(n => {

    })
}