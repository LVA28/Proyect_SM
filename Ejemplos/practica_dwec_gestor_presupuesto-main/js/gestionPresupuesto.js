// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(valor) {
    if (isNaN(valor)) {
        console.log("El valor introducido no debe ser texto")
        return -1;
    }
    else if (valor < 0) {
        console.log("El valor introducido no debe ser negativo");
        return -1;
    }
    else {
        presupuesto = valor;
        return presupuesto;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, Intvalor, intFecha, ...args) {
    this.descripcion = descripcion;
    if (Intvalor < 0) {
        this.valor = 0;
    }
    else if (isNaN(Intvalor)) {
        this.valor = 0;
    }
    else {
        this.valor = Intvalor;
    }
    if (intFecha == undefined) {
        let fecha1 = new Date;
        this.fecha = Date.parse(fecha1);
    }
    else {
        this.fecha = Date.parse(intFecha);
    }

    this.etiquetas = new Array;
    if (args.length != 0) {
        for (var i = 0; i < args.length; i++) {
            this.etiquetas[i] = args[i];
        }
    }
    //console.log(this.etiquetas);
    this.addEtiquetas = function (...args) {
        args.reduce((a, b) => this.etiquetas.push(a, b, 0));
    }

    this.mostrarGasto = function () {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    this.actualizarDescripcion = function (newDesc) {
        this.descripcion = newDesc;
    }

    this.actualizarValor = function (IntVal) {
        if (IntVal >= 0 && isNaN(IntVal) == false) {
            this.valor = IntVal;
        }
    }

    this.mostrarGastoCompleto = function () {
        let cadena = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${new Date(this.fecha).toLocaleString()}\nEtiquetas:\n`;
        for (let i = 0; i < this.etiquetas.length; i++) {
            cadena += `- ${this.etiquetas[i]}\n`;
        }
        return cadena;
    }

    this.actualizarFecha = function (nuevaFecha) {
        if (Date.parse(nuevaFecha)) {
            this.fecha = Date.parse(nuevaFecha);
        }
    }

    this.anyadirEtiquetas = function (...etiquetaNueva) {
        for (let i = 0; i < [...etiquetaNueva].length; i++) {
            if (!this.etiquetas.includes(etiquetaNueva[i])) {
                this.etiquetas.push(etiquetaNueva[i]);
            }
        }
    }

    this.borrarEtiquetas = function (...etiquetaBorra) {
        for (let i = 0; i < etiquetaBorra.length; i++) {
            let index = this.etiquetas.indexOf(etiquetaBorra[i]);
            if (index > -1) {
                this.etiquetas.splice(index, 1);
            }
        }
    }

    this.devolverValor = function () {
        return this.valor;
    }

    this.devolverFecha = function () {
        return this.fecha;
    }

    this.devolverDes = function () {
        return this.descripcion;
    }

    this.devolverEtiquetas = function () {
        return this.etiquetas;
    }

    this.obtenerPeriodoAgrupacion = function (condicion) {
        let cadenaFecha;
        let fechaObjeto = new Date(this.fecha);
        if (condicion == "anyo") {
            cadenaFecha = fechaObjeto.getFullYear();
        }
        else if (condicion == "mes") {
            cadenaFecha = fechaObjeto.getFullYear() + "-" + (fechaObjeto.getMonth() < 9 ? "0" : "") + (fechaObjeto.getMonth() + 1);
        }
        else if (condicion == "dia") {
            cadenaFecha = fechaObjeto.getFullYear() + "-" + (fechaObjeto.getMonth() < 9 ? "0" : "") + (fechaObjeto.getMonth() + 1) + "-" + (fechaObjeto.getDate() < 10 ? "0" : "") + fechaObjeto.getDate();
        }
        return cadenaFecha;
    }
}

function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto(id) {
    let comprobar = false;
    for (let i = 0; i < gastos.length && comprobar == false; i++) {
        let gasto = gastos[i];
        if (gasto.id == id) {
            comprobar = true;
            let index = gastos.indexOf(gastos[i]);
            if (index > -1) {
                gastos.splice(index, 1);
            }
        }
    }
}

function calcularTotalGastos() {
    let coste = 0;
    for (let i = 0; i < gastos.length; i++) {
        let gasto = gastos[i];
        coste = coste + gasto.devolverValor();
    }
    return coste;
    //return(`El coste total es ${coste}€`);
}

function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

function filtrarGastos({ fechaDesde, fechaHasta, valorMinimo, valorMaximo, descripcionContiene, etiquetasTiene }) {
    let gastosFiltrados = [...gastos];
    let Et1 = false;
    let Et2 = false;
    let Et3 = false;
    let Et4 = false;
    let Et5 = false;
    let Et6 = false;
    if (fechaDesde != undefined) {
        let fechaBuscar1 = Date.parse(fechaDesde);
        gastosFiltrados = gastosFiltrados.filter(item => item.fecha >= fechaBuscar1);
        Et1 = true;
    }
    if (fechaHasta != undefined) {
        let fechaBuscar2 = Date.parse(fechaHasta);
        gastosFiltrados = gastosFiltrados.filter(item => item.fecha <= fechaBuscar2);
        Et2 = true;
    }
    if (valorMinimo != undefined) {
        let valor1 = valorMinimo;
        gastosFiltrados = gastosFiltrados.filter(item => item.valor >= valor1);
        Et3 = true;
    }
    if (valorMaximo != undefined) {
        let valor2 = valorMaximo;
        gastosFiltrados = gastosFiltrados.filter(item => item.valor <= valor2);
        Et4 = true;
    }
    if (descripcionContiene != undefined) {
        let descripcionFil = descripcionContiene.toString().toLowerCase();
        gastosFiltrados = gastosFiltrados.filter(item => item.descripcion.toString().toLowerCase().includes(descripcionFil));
        Et5 = true;
    }

    if (etiquetasTiene != undefined) {
        gastosFiltrados = gastosFiltrados.filter((item) => {
            let etiquetasRet = false;
            for (let i = 0; i < etiquetasTiene.length; i++) {
                if (item.etiquetas.includes(etiquetasTiene[i])) {
                    etiquetasRet = true;

                    break;
                }
            }
            return etiquetasRet;
        });
        Et6 = true;
    }
    if (Et1 == false && Et2 == false && Et3 == false && Et4 == false && Et5 == false && Et6 == false) {
        gastosFiltrados = [...gastos];
    }
    return gastosFiltrados;
}

//activar actions

function agruparGastos(periodo, etiquetas, fechaDesde, fechaHasta) {
    if(periodo == undefined){
        periodo = "mes";
    }
    let filGasto = filtrarGastos({
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        etiquetasTiene: etiquetas
    });
    return filGasto.reduce(function(acc, gasto){
        let periodosAgrupados = gasto.obtenerPeriodoAgrupacion(periodo);
        acc[periodosAgrupados] = (acc[periodosAgrupados] || 0) + gasto.valor;
        return acc;
    }, {})
}

function transformarListadoEtiquetas(texto){
    let lista = new Array;
   lista = texto.split(/\W+/g);
    return lista;
}

function cargarGastos(gastosAdd){
    gastos = [];
    idGasto = 0;
    for(let g of gastosAdd){
        let gastoN = new CrearGasto();
        Object.assign(gastoN, g);
        anyadirGasto(gastoN);
    }
}
// object.keys(elObjeto) 

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos,
    gastos,
    idGasto,
    transformarListadoEtiquetas,
    cargarGastos
}
