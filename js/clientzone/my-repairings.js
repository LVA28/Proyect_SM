'use strict'


// 1. Recibe una lista de reparaciones y un container
function renderRepairList(repairList, container) {
    container.innerHTML = ""; // Limpia el contenedor

    repairList.forEach(repair => {
        renderSingleRepair(repair, container);
    });
}

// 2. Recibe una sola reparación y un container
function renderSingleRepair(repair, container) {
    const template = document.getElementById("repairing-template");
    const clone = template.content.cloneNode(true);

    // Rellenar datos
    clone.querySelector(".name").textContent = repair.name;
    clone.querySelector(".repairing-description").textContent = repair.description;

    const image = clone.querySelector(".repairing-image");
    image.src = repair.imageUrl;
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
        alert("TODO!!");
    });

    clone.querySelector('.repairing-header').addEventListener('click', () =>{
        loadContent("resumen-reparacion.html", null, "")
    })

    // Insertar en el container
    container.appendChild(clone);
}

function onLoadMisSolicitudesDeReparaciones()
{
    let repairData = JSON.parse(sessionStorage.getItem("myrepairs"))
    renderRepairList(repairData, document.querySelector('.reparing-container'))
}
