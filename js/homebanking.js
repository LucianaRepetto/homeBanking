//Declaración de variables
let nombreUsuario = "Luciana Repetto";

let saldoCuenta = 50000;

let limiteExtraccion = 3000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(num){
    saldoCuenta += num;
   // console.log(saldoCuenta);
}

function restarDinero(num){
    saldoCuenta -= num;
    // console.log(saldoCuenta);
}

function cambiarLimiteDeExtraccion() {

}

function extraerDinero (){
   
}

function depositarDinero() {
    const dineroAdepositar = parseInt(prompt("¿Cuanto dinero desea depositar?", "1000"));
    const saldoCuentaAnterior = saldoCuenta; //almaceno el valor anterior para mostrarlo en pantalla
    sumarDinero(dineroAdepositar); // sumo el deposito al total de mi cuenta 
    actualizarSaldoEnPantalla();
    alert("Has depositado: $" + dineroAdepositar
         + "\nSaldo anterior: $"+ saldoCuentaAnterior  + "\nSaldo actual: $"+ saldoCuenta );
    
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}