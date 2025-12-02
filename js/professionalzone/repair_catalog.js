/*function insertarplatosMan(plato) {
    let grupoCat = document.getElementById(plato.categoria);

    let divPlato = document.createElement("div");
    divPlato.className = "menu-item";

    let divContenido = document.createElement("div");
    divContenido.className = "contenido";

    let imagen = document.createElement("img");
    imagen.src = `imagenes/${plato.imagen}`;
    imagen.className = "img-thumnail";
    imagen.style.width = "200px";
    imagen.style.height = "200px";
    divContenido.append(imagen);

    let infoPlato = document.createElement("div");
    infoPlato.className = "info-plato";

    let nombreP = document.createElement("p");
    nombreP.textContent = `${plato.nombre}`;
    infoPlato.append(nombreP);

    let ingredientesP = document.createElement("p");
    ingredientesP.textContent = `Ingredientes: ${plato.ingredientes}`;
    infoPlato.append(ingredientesP);

    let alergenosP = document.createElement("p");
    let texto = "Alergenos: ";
    if (plato.alergenos[0] == null) {
        texto += "Ninguno.";
    } else {
        for (let i = 0; i < plato.alergenos.length; i++) {
            if (i === (plato.alergenos.length - 1)) {
                texto += `${plato.alergenos[i]}.`;    
            } else {
                texto += `${plato.alergenos[i]}, `;
            }
        }
    }
    alergenosP.textContent = texto;
    alergenosP.className = "fs-6 fw-bold";
    infoPlato.append(alergenosP);

    let precioP = document.createElement("p");
    precioP.textContent = `${plato.precio}`;
    infoPlato.append(precioP);

    divContenido.append(infoPlato);
    divPlato.append(divContenido);

    let divBtns = document.createElement("div");
    divBtns.className = "number-container";

    let btnM = document.createElement("button");
    btnM.className = "btn btn-primary btn-custom";
    btnM.textContent = "+";
    btnM.setAttribute("id", `SumarPlato${plato.id}`);
    divBtns.append(btnM);
    let nuevoManSum = new SumarCantidad();
    nuevoManSum.plato = plato;
    btnM.addEventListener('click', nuevoManSum);

    let numero = document.createElement("p");
    numero.textContent = "0";
    numero.className = "number-display mx-2";
    numero.setAttribute("id", `cantidadPlato${plato.id}`);
    divBtns.append(numero);

    let btnMe = document.createElement("button");
    btnMe.className = "btn btn-primary btn-custom";
    btnMe.textContent = "-";
    btnMe.setAttribute("id", `RestarPlato${plato.id}`);
    console.log(btnMe);
    divBtns.append(btnMe);
    let nuevoManRes = new RestarCantidad();
    nuevoManRes.plato = plato;
    btnMe.addEventListener('click', nuevoManRes);
    
    divPlato.append(divBtns);

    grupoCat.append(divPlato);
}

function filtrarPlatos(platos) {
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    var alergenosMarcados = Array.from(checkboxes).map(function(checkbox) {
        return checkbox.value;
    });

    var platosFiltrados = platos.filter(function(plato) {
        return alergenosMarcados.every(function(alergeno) {
            return !plato.alergenos.includes(alergeno);
        });
    });

    return platosFiltrados;
}

function mostrarPlatos(platos){
    for(let i = 0; i < platos.length; i++){
        insertarplatosMan(platos[i]);
    }
}

function limpiarPantalla(){
    let menu = document.getElementById("menuPlatos");
    menu.innerHTML = "";
    let entrantes = document.createElement("div");
    entrantes.setAttribute("id", "entrantes");
    menu.append(entrantes);
    let arroces = document.createElement("div");
    arroces.setAttribute("id", "arroces");
    menu.append(arroces);
    let carne = document.createElement("div");
    carne.setAttribute("id", "carne");
    menu.append(carne);
    let pescado = document.createElement("div");
    pescado.setAttribute("id", "pescado");
    menu.append(pescado);
    let postres = document.createElement("div");
    postres.setAttribute("id", "postres");
    menu.append(postres);
}

function CrearPlato(imagen, nombre, ingredientes, precio, categoria, ...alergenos) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.categoria = categoria;
    this.alergenos = alergenos || [];
}

function SumarCantidad(){
    this.handleEvent = function (event) {
        console.log(event.target.id);
        if (event.target.id == `SumarPlato${this.plato.id}`) {
            let cantidad = document.getElementById(`cantidadPlato${this.plato.id}`);
            let numero = parseInt(cantidad.textContent);
            numero++;
            cantidad.textContent = numero;
        }
    }
}

function RestarCantidad(){
    this.handleEvent = function (event) {
        console.log(event.target.id);
        if (event.target.id == `RestarPlato${this.plato.id}`) {
            let cantidad = document.getElementById(`cantidadPlato${this.plato.id}`);
            let numero = parseInt(cantidad.textContent);
            if(numero == 0){
                alert("No se puede tener menos de 0 platos.");   
            }
            else{
                numero--;
            }
            cantidad.textContent = numero;
        }
    }
}

function pedirPlatos(){
    let platosPedidos = [];
    for(let i = 0; i < platos.length; i++){
        let cantidad = parseInt(document.getElementById(`cantidadPlato${platos[i].id}`).textContent);
        if(cantidad > 0){
            platosPedidos.push(platos[i]);
        }
    }
    return platosPedidos;
}

let plato1 = new CrearPlato("1.jpg", "Patatas Bravas", "Patatas, salsa de tómate, tabasco, ajo", "5,00€", "entrantes", "Gluten");
let plato2 = new CrearPlato("2.jpg", "Mini tostas de sobrasada con huevo y codorniz", "Pan, huevos de cordoniz, sobrasada", "7,00€", "entrantes","Gluten", "Huevo");
let plato3 = new CrearPlato("3.jpg", "Tabla de quesos", "Queso manchego, queso azul, queso de cabra, queso de trufa", "13,00€", "entrantes","Lacteos");
let plato4 = new CrearPlato("4.jpg", "Arroz de pulpo con ajos tiernos", "Arroz, pulpo, ñora, ajos tiernos, romero, aceite de oliva", "16,00€", "arroces","Molusco");
let plato5 = new CrearPlato("5.jpg", "Arroz de secreto", "Arroz, secreto, ñora", "15,00€", "arroces", null);
let plato6 = new CrearPlato("6.jpg", "Costillas de cordero", "Costillas de cordero, patatas, ajos tiernos", "25,00€", "carne", null);
let plato7 = new CrearPlato("7.jpg", "Merluza a la gallega", "Merluza, cebolla, patatas, pimentón, ajo", "20,00€", "pescado", "Pescado");
let plato8 = new CrearPlato("8.jpg", "Brownie de chocolate", "Leche, mantequilla, azúcar, sal, cacahuete, cacao, huevos", "7,00€", "postres","Gluten", "Lacteos", "Huevos", "Cacahuetes");
let plato9 = new CrearPlato("9.jpg", "Horchata", "Chufa", "6,00€", "postres", null);

let platos = [];
let idP = 0;

function anyadirPlato(plato){
    plato.id = idP;
    platos[idP] = plato;
    idP++;
}
anyadirPlato(plato1);
anyadirPlato(plato2);
anyadirPlato(plato3);
anyadirPlato(plato4);
anyadirPlato(plato5);
anyadirPlato(plato6);
anyadirPlato(plato7);
anyadirPlato(plato8);
anyadirPlato(plato9);

for(let i = 0; i < platos.length; i++){
    insertarplatosMan(platos[i]);
}

let btnFil = document.getElementById("btnFiltrar");

btnFil.addEventListener("click", function(){
    limpiarPantalla();
    mostrarPlatos(filtrarPlatos(platos));
})

let btnPedir = document.getElementById("btnPedir");

btnPedir.addEventListener("click", function(){
    let platosPedidos = pedirPlatos();
    console.log(platosPedidos);
    if(platosPedidos == 0){
        alert("Tienes que añadir minimo un producto para pedir a cocina.");
    }
    else{
        alert("El pedido ha sido enviado a cocina.");
        limpiarPantalla();
        mostrarPlatos(platos);
    }
})
*/