import * as  GP from "./gestionPresupuesto.js";

let usuarioID;

function mostrarDatoEnId(valor, id) {
    let parrafo = document.createElement("p");
    parrafo.textContent = valor;
    document.getElementById(id).append(parrafo);
}
function mostrarGastoWeb(id, gasto) {
    let divGasto = document.createElement("div");
    divGasto.className = "gasto";
    let divDes = document.createElement("div");
    divDes.className = "gasto-descripcion";
    divDes.textContent = gasto.descripcion;
    divGasto.append(divDes);
    let divFec = document.createElement("div");
    divFec.className = "gasto-fecha";
    let pasarFecha = new Date(gasto.fecha);
    divFec.textContent = pasarFecha.toLocaleDateString();
    divGasto.append(divFec);
    let divVal = document.createElement("div");
    divVal.className = "gasto-valor";
    divVal.textContent = gasto.valor;
    divGasto.append(divVal);
    let divEtiquetas = document.createElement("div");
    divEtiquetas.className = "gasto-etiquetas";
    let lista = [];
    lista = gasto.etiquetas;
    for (let i = 0; i < lista.length; i++) {
        let divspan = document.createElement("span");
        divspan.className = "gasto-etiquetas-etiqueta";
        divspan.textContent = lista[i] + " ";
        let nuevoManDelEt = new BorrarEtiquetasHandle();
        nuevoManDelEt.gasto = gasto;
        nuevoManDelEt.etiquetaDel = lista[i];
        divEtiquetas.addEventListener('click', nuevoManDelEt);
        divEtiquetas.append(divspan);
    }
    divGasto.append(divEtiquetas);
    let btnEd = document.createElement("button");
    btnEd.textContent = "Editar";
    btnEd.className = "gasto-editar";
    btnEd.id = gasto.id;
    divGasto.append(btnEd);
    let nuevoManEd = new EditarHandle();
    nuevoManEd.gasto = gasto;
    btnEd.addEventListener('click', nuevoManEd);

    let btnDel = document.createElement("button");
    btnDel.className = "gasto-borrar";
    btnDel.textContent = "Borrar";
    btnDel.id = gasto.id;
    divGasto.append(btnDel);
    let nuevoManDel = new BorrarHandle();
    nuevoManDel.gasto = gasto;
    btnDel.addEventListener('click', nuevoManDel);

    let btnDelApi = document.createElement("button");
    btnDelApi.className = "gasto-borrar-api";
    btnDelApi.textContent = "Borrar (API)";
    divGasto.append(btnDelApi);
    let manDelApi = new BorrarGastosApi();
    manDelApi.gasto = gasto;
    manDelApi.id = gasto.gastoId;
    manDelApi.user = gasto.usuario;
    manDelApi.idG = gasto.id;
    btnDelApi.addEventListener("click", manDelApi);

    let btnEdF = document.createElement("button");
    btnEdF.textContent = "Editar";
    btnEdF.className = "gasto-editar-formulario";
    btnEdF.id = gasto.id;
    divGasto.append(btnEdF);
    let nuevoManedF = new EditarHandleFormulario();
    nuevoManedF.gasto = gasto;
    nuevoManedF.divGasto = divGasto;
    nuevoManedF.boton = btnEdF;
    btnEdF.addEventListener('click', nuevoManedF);
    document.getElementById(id).append(divGasto);
}

function mostrarGastosAgrupadosWeb(id, agrup, periodo) {
    var divP = document.getElementById(id);
    divP.innerHTML = "";
    let divAgrupacion = document.createElement("div");
    divAgrupacion.className = "agrupacion";
    let titulo = document.createElement("h1");
    titulo.textContent = `Gastos agrupados por ${periodo}`;
    divAgrupacion.append(titulo);
    let agrupDiv = Object.entries(agrup);
    for (let i = 0; i < agrupDiv.length; i++) {
        let divAgrupDat = document.createElement("div");
        divAgrupDat.className = "agrupacion-dato";
        let agrupK = Object.keys(agrupDiv)[i];
        let agrupV = Object.values(agrupDiv)[i];
        let spanClave = document.createElement("span");
        spanClave.className = "agrupacion-dato-clave";
        spanClave.textContent = agrupK;
        divAgrupDat.append(spanClave);
        let spanValor = document.createElement("span");
        spanValor.className = "agrupacion-dato-valor";
        spanValor.textContent = agrupV;
        divAgrupDat.append(spanValor);
        divAgrupacion.append(divAgrupDat);
    }
    document.getElementById(id).append(divAgrupacion);
    divP.style.width = "33%";
    divP.style.display = "inline-block";
    let chart = document.createElement("canvas");
    let unit = "";
    switch (periodo) {
        case "anyo":
            unit = "year";
            break;
        case "mes":
            unit = "month";
            break;
        case "dia":
        default:
            unit = "day";
            break;
    }
    const myChart = new Chart(chart.getContext("2d"), {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: `Gastos por ${periodo}`,
                    backgroundColor: "#555555",
                    data: agrup
                }
            ],
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: unit
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    divP.append(chart);
}

function repintar() {
    document.getElementById('presupuesto').innerHTML = '';
    mostrarDatoEnId(GP.mostrarPresupuesto(), 'presupuesto');
    document.getElementById('gastos-totales').innerHTML = '';
    mostrarDatoEnId(GP.calcularTotalGastos(), "gastos-totales");
    document.getElementById('balance-total').innerHTML = '';
    mostrarDatoEnId(GP.calcularBalance(), "balance-total");
    document.getElementById('listado-gastos-completo').innerHTML = '';
    for (let i = 0; i < GP.gastos.length; i++) {
        let gasto = GP.gastos[i];
        mostrarGastoWeb("listado-gastos-completo", gasto);
    }
    mostrarGastosAgrupadosWeb("agrupacion-dia", GP.agruparGastos("dia"), "dia");
    mostrarGastosAgrupadosWeb("agrupacion-mes", GP.agruparGastos("mes"), "mes");
    mostrarGastosAgrupadosWeb("agrupacion-anyo", GP.agruparGastos("anyo"), "año");
}

function actualizarPresupuestoWeb() {
    let valor = parseFloat(prompt("Introduce el valor del presupuesto"));
    GP.actualizarPresupuesto(valor);
    repintar();
}

function nuevoGastoWeb() {
    let descripcion = prompt("Introduce la descripcion del gasto");
    let valor = parseFloat(prompt("Introduce el valor del gasto"));
    let fecha = prompt("Introduce la fecha del gasto");
    let etiquetas = prompt("Introduce las etiquetas del gasto");
    let gastoNuevo = new GP.CrearGasto(descripcion, valor, fecha, etiquetas);
    GP.anyadirGasto(gastoNuevo);
    repintar();
}

function EditarHandle() {
    this.handleEvent = function (event) {
        if (event.target.id == this.gasto.id) {
            let descripcion = prompt("Introduce la descripcion del gasto");
            let valor = parseFloat(prompt("Introduce el valor del gasto"));
            let fecha = prompt("Introduce la fecha del gasto");
            let etiquetas = prompt("Introduce las etiquetas del gasto");
            this.gasto.descripcion = descripcion;
            this.gasto.valor = valor;
            this.gasto.actualizarFecha(fecha);
            this.gasto.anyadirEtiquetas(etiquetas);
        }
        repintar();
    }
}

function BorrarHandle() {
    this.handleEvent = function (event) {
        if (event.target.id == this.gasto.id) {
            GP.borrarGasto(this.gasto.id);
        }
        repintar();
    }
}

function BorrarEtiquetasHandle() {
    this.handleEvent = function (event) {
        let end = false;
        for (let i = 0; i < this.gasto.etiquetas.length && end == false; i++) {
            let comp = this.gasto.etiquetas[i] + " ";
            if (event.target.textContent == comp) {
                this.gasto.borrarEtiquetas(this.gasto.etiquetas[i]);
                end = true;
            }
            repintar();
        }
    }
}

function nuevoGastoWebFormulario() {
    let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);;
    var formulario = plantillaFormulario.querySelector("form");
    document.getElementById("controlesprincipales").append(formulario);
    document.getElementById("anyadirgasto-formulario").disabled = true;
    formulario.addEventListener("submit", function () {
        event.preventDefault()
        let des = formulario.descripcion.value;
        let val = parseFloat(formulario.valor.value);
        let fecha = formulario.fecha.value;
        let eti = formulario.etiquetas.value.split(",");
        let gasto = new GP.CrearGasto(des, val, fecha, ...eti);
        GP.anyadirGasto(gasto);
        document.getElementById("anyadirgasto-formulario").disabled = false;
        repintar();
    })
    formulario.querySelector('button.cancelar').addEventListener("click", function () {
        document.getElementById("anyadirgasto-formulario").disabled = false;
        formulario.remove();
        repintar();
    })
    formulario.querySelector('button.gasto-enviar-api').addEventListener("click", function () {
        enviarGastosApi();
    })
}

function EditarHandleFormulario() {
    this.handleEvent = function (event) {
        let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);;
        var formulario = plantillaFormulario.querySelector("form");
        let boton = this.boton;
        boton.disabled = true;
        let gasto = this.gasto;
        formulario.descripcion.value = gasto.descripcion;
        formulario.valor.value = gasto.valor;
        let fecha = new Date(gasto.fecha);
        let cadenaF = `${fecha.getFullYear()}-${(fecha.getMonth() < 9 ? "0" : "") + (fecha.getMonth() + 1)}-${(fecha.getDate() < 10 ? "0" : "") + fecha.getDate()}`;
        formulario.fecha.value = cadenaF;
        formulario.etiquetas.value = gasto.etiquetas;
        this.divGasto.append(formulario);

        formulario.addEventListener("submit", function () {
            event.preventDefault();

            gasto.descripcion = formulario.descripcion.value;
            gasto.valor = parseFloat(formulario.valor.value);
            gasto.actualizarFecha(Date.parse(formulario.fecha.value));
            formulario.elements.etiquetas.value.split(',');
            repintar();
            formulario.remove;
            boton.disabled = false;
        })

        formulario.querySelector('button.cancelar').addEventListener("click", function () {
            formulario.remove();
            repintar();
            boton.disabled = false;
        })

        let botApiEnviar = formulario.querySelector("button.gasto-enviar-api");
        let editarAPI = new EditarGastoApi();
        editarAPI.formulario = formulario;
        editarAPI.gasto = gasto;
        botApiEnviar.addEventListener('click', editarAPI);

    }
}




function filtrarGastoWeb() {
    this.handleEvent = function (event) {
        event.preventDefault();
        console.log("Entra zona 1");
        let formulario = this.formulario;
        let des = formulario.elements["formulario-filtrado-descripcion"].value;
        if (formulario.elements["formulario-filtrado-descripcion"].value == "") {
            des = undefined;
        }
        let valMin;
        if (formulario.elements["formulario-filtrado-valor-minimo"].value == "") {
            valMin = undefined
        }
        else {
            valMin = parseFloat(formulario.elements["formulario-filtrado-valor-minimo"].value);
        }
        let valMax;
        if (formulario.elements["formulario-filtrado-valor-maximo"].value == "") {
            valMax = undefined;
        }
        else {
            valMax = parseFloat(formulario.elements["formulario-filtrado-valor-maximo"].value);
        }
        let fechaD = formulario.elements["formulario-filtrado-fecha-desde"].value;
        if (formulario.elements["formulario-filtrado-fecha-desde"].value == "") {
            fechaD = undefined;
        }
        let fechaH = formulario.elements["formulario-filtrado-fecha-hasta"].value;
        if (formulario.elements["formulario-filtrado-fecha-hasta"].value == "") {
            fechaH = undefined;
        }
        let eti = formulario.elements["formulario-filtrado-etiquetas-tiene"].value;
        console.log(eti);
        console.log("Entra zona 2");
        let eti2 = new Array;
        if (eti != "") {
            console.log(eti);
            eti2 = GP.transformarListadoEtiquetas(eti);
            console.log(eti2);
        }
        else {
            eti2 = undefined;
        }
        if (des == undefined && valMin == undefined && valMax == undefined && fechaD == undefined && fechaH == undefined && eti2 == undefined) {
            console.log("Entra zona 2.6");
            document.getElementById('listado-gastos-completo').innerHTML = '';
            for (let i = 0; i < GP.gastos.length; i++) {
                let gasto = GP.gastos[i];
                mostrarGastoWeb("listado-gastos-completo", gasto);
                console.log("Im blue");
            }
        }
        else {
            console.log("Entra zona 2.5");
            document.getElementById('listado-gastos-completo').innerHTML = '';
            for (let i = 0; i < GP.filtrarGastos({ fechaDesde: fechaD, fechaHasta: fechaH, valorMinimo: valMin, valorMaximo: valMax, descripcionContiene: des, etiquetasTiene: eti2 }).length; i++) {
                let gasto = GP.filtrarGastos({ fechaDesde: fechaD, fechaHasta: fechaH, valorMinimo: valMin, valorMaximo: valMax, descripcionContiene: des, etiquetasTiene: eti2 })[i];
                mostrarGastoWeb("listado-gastos-completo", gasto);
                console.log("Entra zona 3");
            }
        }

    }
}

function guardarGastoWeb() {
    localStorage.GestorGastosDWEC = JSON.stringify(GP.listarGastos());
}

function cargarGastoWeb() {
    if (localStorage.GestorGastosDWEC != "" && localStorage.GestorGastosDWEC != undefined) {
        GP.cargarGastos(JSON.parse(localStorage.GestorGastosDWEC));
        repintar();
    }
    else {
        GP.cargarGastos([]);
        repintar();
    }

}

async function cargarGastosApi() {
    let texto = document.getElementById("nombre_usuario");
    let id = texto.value;
    usuarioID = id;
    let response = await fetch(`https://suhhtqjccd.execute-api.eu-west-1.amazonaws.com/latest/${id}`);
    if (response.ok) {
        let json = await response.json();
        GP.cargarGastos(json);
        repintar();
    } else {
        alert("Error-HTTP: " + response.status);
    }
}

function BorrarGastosApi() {
    this.handleEvent = async function () {
        let idDel = this.idG
        let response = await fetch(`https://suhhtqjccd.execute-api.eu-west-1.amazonaws.com/latest/${this.user}/${this.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.gasto)
        });
        if (response.ok) {
            GP.borrarGasto(idDel);
            repintar();
        }
        else {
            alert("Error-HTTP: " + response.status);
        }
    }
}

async function enviarGastosApi() {
    let controles = document.getElementById("controlesprincipales").children;
    let formulario = controles[controles.length - 1];
    let des = formulario.descripcion.value;
    let val = parseFloat(formulario.valor.value);
    let fecha = formulario.fecha.value;
    let eti = [];
    eti = formulario.etiquetas.value;
    eti = eti.split(",");
    console.log(eti);
    let gasto = new GP.CrearGasto(des, val, fecha, ...eti);
    let response = await fetch(`https://suhhtqjccd.execute-api.eu-west-1.amazonaws.com/latest/${usuarioID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gasto)
    });
    if (response.ok) {
        console.log(gasto);
        repintar();
    }
    else {
        alert("Error-HTTP: " + response.status);
    }
}

function EditarGastoApi() {
    this.handleEvent = async function () {
        this.gasto.descripcion = this.formulario.descripcion.value;
        this.gasto.valor = parseFloat(this.formulario.valor.value);
        this.gasto.fecha = this.formulario.fecha.value;
        let etiquet = this.formulario.etiquetas.value;
        this.gasto.etiquetas = etiquet.split(",");
        let editar = await fetch(`https://suhhtqjccd.execute-api.eu-west-1.amazonaws.com/latest/${this.gasto.usuario}/${this.gasto.gastoId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.gasto)
        });
        if (editar.ok) {
            cargarGastosApi();
        }
    }
}

let formulario = document.getElementById("formulario-filtrado");
let nForFil = new filtrarGastoWeb();
nForFil.formulario = document.getElementById("formulario-filtrado");
formulario.addEventListener("submit", nForFil);

let btnGuardar = document.getElementById("guardar-gastos");
btnGuardar.addEventListener("click", function () {
    guardarGastoWeb();
});
let btnCargar = document.getElementById("cargar-gastos");
btnCargar.addEventListener("click", function () {
    cargarGastoWeb();
});

let btnCargarApi = document.getElementById("cargar-gastos-api");
btnCargarApi.addEventListener("click", function () {
    cargarGastosApi();
})

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar,
    actualizarPresupuestoWeb,
    nuevoGastoWeb,
    EditarHandle,
    BorrarHandle,
    BorrarEtiquetasHandle,
    nuevoGastoWebFormulario,
    EditarHandleFormulario,
    filtrarGastoWeb,
    guardarGastoWeb,
    cargarGastoWeb,
    cargarGastosApi,
    BorrarGastosApi
}

//volver hacer pull