'use strict'

let repairImage;
let repairPrice;
let repairName;
let repairLocation;
let repairDescription;
let repairTagsContainer;

function onLoadObjectResume() {
    let chats = JSON.parse(sessionStorage.getItem("chats"))
    let repairs = JSON.parse(sessionStorage.getItem("products"))
    let repair = repairs.filter(n => n.id == sessionStorage.getItem("objectId"))[0]

    repairImage = document.querySelector('.repair-image');
    repairPrice = document.querySelector('.repair-price');
    repairName = document.querySelector('.repair-name');
    repairLocation = document.querySelector('.repair-location');
    repairDescription = document.querySelector('.repair-description');
    repairTagsContainer = document.querySelector('.tags-container');

    fillForm(repair)

    document.querySelector('#start-chat').addEventListener('click', () => {
        if(!repair.interestedPersons.includes(-1))
        {
            const nextChatId = Math.max(
            ...chats
                .map(c => Number(c.chatId))
                .filter(id => !Number.isNaN(id))
            ) + 1;

            repair.interestedPersons.push(-1)
            repair.interestedPersonsChats.push(nextChatId)

            repairs[repairs.indexOf(repair)] = repair

            sessionStorage.setItem("products", JSON.stringify(repairs))
        }

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