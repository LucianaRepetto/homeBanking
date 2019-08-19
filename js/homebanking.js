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
    const nuevoLimite = parseInt(prompt("Establecer nuevo límite de extracción", "1000"));
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite de extracción es: $" + limiteExtraccion)
}

function extraerDinero (){
    const dineroAextraer = parseInt(prompt("¿Cuanto dinero desea retirar?", "1000"));
    const saldoCuentaAnterior = saldoCuenta; //almaceno el valor anterior para mostrarlo en pantalla
    restarDinero(dineroAextraer);
    actualizarSaldoEnPantalla();
    alert("Has retirado: $" + dineroAextraer
         + "\nSaldo anterior: $"+ saldoCuentaAnterior  + "\nSaldo actual: $"+ saldoCuenta );
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