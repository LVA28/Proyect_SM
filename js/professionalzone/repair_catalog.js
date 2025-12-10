//Objeto: id, name, description, imageUrl, location, productTags, price, userId, interestedPersons
// import * as DP from "../sharedcontent/data_products.js"

// let productos = DP.generateRandomProducts();
// let productos = generateRandomProducts();    

function insertarProducto(productos) {
    limpiarPantalla();

    let catalago = document.getElementById("catalog-container");
    console.log(productos.length)
    for (let i = 0; i < productos.length; i++) {
        let div1 = document.createElement("div");
        div1.className = "catalog-item";

        let div2 = document.createElement("div");
        div2.className = "row gx-3";

        let div3 = document.createElement("div");
        div3.className = "col-12 col-md-3 d-flex flex-column gap-2 mb-3 mb-md-0";

        let divName = document.createElement("div");
        divName.className = "name-box";
        divName.textContent = `${productos[i].name}`;

        let divPrecio = document.createElement("div");
        divPrecio.className = "meta-box";
        divPrecio.textContent = `${productos[i].price}€`;

        let divLugar = document.createElement("div");
        divLugar.className = "meta-box";
        divLugar.textContent = `${productos[i].location}`;

        let div4 = document.createElement("div");
        div4.className = "col-12 col-md-4 mb-3 mb-md-0";

        let div5 = document.createElement("div");
        div5.className = "image-box";

        let divSpan = document.createElement("span");
        divSpan.className = "text-uppercase fw-bold";

        let div6 = document.createElement("div");
        div6.className = "col-12 col-md-5 d-flex flex-column";

        let div7 = document.createElement("div");
        div7.className = "desc-box";
        div7.textContent =  `${productos[i].description}`;

        let btnChat = document.createElement("button");
        btnChat.className = "chat-btn";
        btnChat.textContent = "INICIAR CHAT";
        btnChat.onclick = iniciarChat;

        div6.append(div7);
        div6.append(btnChat);
        
        div5.append(divSpan);
        div4.append(div5);

        div3.append(divName);
        div3.append(divPrecio);
        div3.append(divLugar);

        div2.append(div3);
        div2.append(div4);
        div2.append(div6);

        div1.append(div2);
        catalago.append(div1);

        let separator = document.createElement("div");
        separator.className = "item-separator";
        catalago.append(separator);
    }
}

function limpiarPantalla() {
    let catalogo = document.getElementById("catalog-container");
    if(catalogo){
        catalogo.innerHTML = "";
    }
}

function iniciarChat(){
    loadContent("chat.html", null, "")
}

function onLoadCatalogo()
{
    let productos = JSON.parse(sessionStorage.getItem("repairings"))
    insertarProducto(productos);
}

// document.addEventListener('DOMContentLoaded', () => {
    // insertarProducto(productos);
// });

