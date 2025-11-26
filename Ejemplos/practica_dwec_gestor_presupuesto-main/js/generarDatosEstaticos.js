import * as  GP from "./gestionPresupuesto.js";
import * as GPW from "./gestionPresupuestoWeb.js";

GP.actualizarPresupuesto(1500);

//Mostrar presupuesto
GPW.mostrarDatoEnId(GP.mostrarPresupuesto(), "presupuesto");
//Objetos creados

let gasto1 = new GP.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = new GP.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = new GP.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = new GP.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = new GP.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = new GP.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

//Objetos metidos en gastos
GP.anyadirGasto(gasto1);
GP.anyadirGasto(gasto2);
GP.anyadirGasto(gasto3);
GP.anyadirGasto(gasto4);
GP.anyadirGasto(gasto5);
GP.anyadirGasto(gasto6);
GPW.mostrarDatoEnId(GP.calcularTotalGastos(), "gastos-totales");
GPW.mostrarDatoEnId(GP.calcularBalance(), "balance-total");
/*
GPW.mostrarGastoWeb("listado-gastos-completo", gasto1);
GPW.mostrarGastoWeb("listado-gastos-completo", gasto2);
GPW.mostrarGastoWeb("listado-gastos-completo", gasto3);
GPW.mostrarGastoWeb("listado-gastos-completo", gasto4);
GPW.mostrarGastoWeb("listado-gastos-completo", gasto5);
GPW.mostrarGastoWeb("listado-gastos-completo", gasto6);
*/
for(let i = 0; i < GP.gastos.length; i++){
    let gasto = GP.gastos[i];
    GPW.mostrarGastoWeb("listado-gastos-completo", gasto);
}

for(let i = 0; i < GP.filtrarGastos({fechaDesde : "2021-09", fechaHasta : "2021-10"}).length; i++){
    let gasto = GP.filtrarGastos({fechaDesde : "2021-09", fechaHasta : "2021-10"})[i];
    GPW.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
}

for(let i = 0; i < GP.filtrarGastos({valorMinimo : 50}).length; i++){
    let gasto = GP.filtrarGastos({valorMinimo : 50})[i];
    GPW.mostrarGastoWeb("listado-gastos-filtrado-2", gasto);
}

for(let i = 0; i < GP.filtrarGastos({valorMinimo : 200, etiquetasTiene : ["seguros"]}).length; i++){
    let gasto = GP.filtrarGastos({valorMinimo : 200, etiquetasTiene : ["seguros"]})[i];
    GPW.mostrarGastoWeb("listado-gastos-filtrado-3", gasto);
}
 

for(let i = 0; i < GP.filtrarGastos({valorMaximo : 50, etiquetasTiene : ["comida", "transporte"]}).length; i++){
    let gasto = GP.filtrarGastos({valorMaximo : 50, etiquetasTiene : ["comida", "transporte"]})[i];
    GPW.mostrarGastoWeb("listado-gastos-filtrado-4", gasto);
}

GPW.mostrarGastosAgrupadosWeb("agrupacion-dia", GP.agruparGastos("dia"), "día");
GPW.mostrarGastosAgrupadosWeb("agrupacion-mes", GP.agruparGastos("mes"), "mes");
GPW.mostrarGastosAgrupadosWeb("agrupacion-anyo", GP.agruparGastos("anyo"), "año");

/*let loquesea = document.getElementById('actualizarpresupuesto');
loquesea.addEventListener('click', patata());
function patata(){
    alert('ojalá funcione');
}*/

const btnAct = document.getElementById("actualizarpresupuesto");
btnAct.addEventListener("click", function(){
    GPW.actualizarPresupuestoWeb();
})

const btnAny = document.getElementById("anyadirgasto");
btnAny.addEventListener("click", function(){
    GPW.nuevoGastoWeb();
})

const btnAnyFor = document.getElementById("anyadirgasto-formulario");
btnAnyFor.addEventListener("click", function(){
    GPW.nuevoGastoWebFormulario();
})