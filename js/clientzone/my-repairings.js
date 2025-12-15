'use strict'


// 1. Recibe una lista de reparaciones y un container
function renderRepairList(repairList, container) {
    container.innerHTML = ""; // Limpia el contenedor

    repairList.forEach(repair => {
        renderSingleRepair(repair, container, repairList);
    });
}

// 2. Recibe una sola reparación y un container
function renderSingleRepair(repair, container, repairList) {
    const template = document.getElementById("repairing-template");
    const clone = template.content.cloneNode(true).querySelector('.repairing-header');

    // Rellenar datos
    clone.querySelector(".name").textContent = repair.name;
    clone.querySelector(".repairing-description").textContent = repair.description;

    const image = clone.querySelector(".repairing-image");
    image.src = '/resources/images/repairings/' + repair.imageUrl;
    image.alt = repair.name;

    // Rellenar tags
    const tagsContainer = clone.querySelector(".tags-container");
    tagsContainer.innerHTML = "";

    repair.tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // Botón borrar (opcional funcionalidad)
    const deleteButton = clone.querySelector(".delete-button");
    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        
        repairList.splice(repairList.indexOf(repair), 1)
        sessionStorage.setItem("myrepairs", JSON.stringify(repairList))
        clone.remove()
    });

    clone.addEventListener('click', () =>{
        sessionStorage.setItem("repairId", repair.id)
        loadContent("resumen-reparacion.html", null, "11", 'client')
    })

    // Insertar en el container
    container.appendChild(clone);
}

function onLoadMisSolicitudesDeReparaciones()
{
    let repairData = JSON.parse(sessionStorage.getItem("myrepairs"))
    renderRepairList(repairData, document.querySelector('#reparing-container'))
}
