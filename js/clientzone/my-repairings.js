'use strict'
const repairData = [
    new RepairApplication(
        101,
        1,
        "Arreglo de Fuga en Tubería",
        0, // price
        "placeholder", // imageUrl
        "Madrid", // location
        "Necesito un fontanero urgente para una pequeña fuga en el baño.",
        ["Fontanería", "Urgente", "24h"],
        [2, 3] // interestedPersons
    ),
    new RepairApplication(
        102,
        1,
        "Pintar Salón y Habitación",
        0,
        "placeholder",
        "Barcelona",
        "Pintar paredes y techo de salón (30m2) y una habitación (12m2).",
        ["Pintura", "Interior"],
        [4]
    ),
    new RepairApplication(
        103,
        1,
        "Instalación de Enchufe Doble",
        0,
        "placeholder",
        "Valencia",
        "Añadir un nuevo punto de electricidad en la cocina.",
        ["Electricidad"],
        [] // nadie interesado
    )
];




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
    renderRepairList(repairData, document.querySelector('.reparing-container'))
}
