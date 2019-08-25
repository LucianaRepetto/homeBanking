//Declaración de variables
let nombreUsuario = "Luciana Repetto";

let codigoSeguridad = 1234;

let saldoCuenta = 50000;

let limiteExtraccion = 3000;

let agua = 350;

let telefono = 425;

let luz = 210;

let internet = 570;

let cuentaAmiga1 = 1234567;

let cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//funcion para ver si es texto
function esTexto(foo) {
    if (isNaN(foo)) {

        return true;
    }
    return false;
}

//funcion para ver si hicieron click en cancel
/*function cancelar(foo){
    if(foo == null){
        return true;
    }
   return false;
}*/

//Funciones que tenes que completar
function sumarDinero(num) {
    saldoCuenta += num;
    // console.log(saldoCuenta);
}

function restarDinero(num) {
    saldoCuenta -= num;
    // console.log(saldoCuenta);
}

function cambiarLimiteDeExtraccion() {
    const nuevoLimite = parseInt(prompt("Establecer nuevo límite de extracción", "6000"));
    if (esTexto(nuevoLimite)) {
        console.log("Sale de la funcion");
    } else {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("Su nuevo límite de extracción es: $" + limiteExtraccion);
    }

}

function extraerDinero() {
    const dineroAextraer = parseInt(prompt("¿Cuanto dinero desea retirar?", "1000"));
    if (esTexto(dineroAextraer)) {
        console.log("sale de la funcion");
    } else if (dineroAextraer > saldoCuenta) {
        alert("No hay saldo disponible en su cuenta para extraer esa cantidad de dinero");
    } else if (dineroAextraer > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción");
    } else if (dineroAextraer % 100 !== 0) {
        alert("Sólo puedes extraer billetes de 100");
    } else {
        const saldoCuentaAnterior = saldoCuenta; //almaceno el valor anterior para mostrarlo en pantalla
        restarDinero(dineroAextraer);
        actualizarSaldoEnPantalla();
        alert("Has retirado: $" + dineroAextraer
            + "\nSaldo anterior: $" + saldoCuentaAnterior + "\nSaldo actual: $" + saldoCuenta);

    };
}

function depositarDinero() {
    const dineroAdepositar = parseInt(prompt("¿Cuanto dinero desea depositar?", "1000"));
    const saldoCuentaAnterior = saldoCuenta; //almaceno el valor anterior para mostrarlo en pantalla
    if (esTexto(depositarDinero)) {
        console.log("Sale de la función")
    } else {
        sumarDinero(dineroAdepositar); // sumo el deposito al total de mi cuenta 
        actualizarSaldoEnPantalla();
        alert("Has depositado: $" + dineroAdepositar
            + "\nSaldo anterior: $" + saldoCuentaAnterior + "\nSaldo actual: $" + saldoCuenta);
    };

}

function pagarServicio() {
    const pagoServicio = parseInt(prompt("Ingrese el número que corresponde con el servicio que desea pagar"
        + "\n1 - Agua"
        + "\n2 - Luz"
        + "\n3 - Internet"
        + "\n4 - Teléfono", "2"));
    //verifico que la cuenta tenga dinero suficiente
    const saldoCuentaAnterior = saldoCuenta;

    if (esTexto(pagoServicio)) {
        console.log("Sale de la función");
    } else {
        if (pagoServicio > saldoCuenta) {
            alert("No cuentas con el saldo disponible para realizar esta transacción")
        } else {
            switch (pagoServicio) {
                case 1:
                    restarDinero(agua);
                    actualizarSaldoEnPantalla();
                    alert("Has pagado el servicio Agua" +
                        "\nSaldo anterior: $" + saldoCuentaAnterior + "\nSaldo Descontado: $" + agua + "\nSaldo actual: $" + saldoCuenta);
                    break;
                case 2:
                    restarDinero(luz);
                    actualizarSaldoEnPantalla();
                    alert("Has pagado el servicio Luz" +
                        "\nSaldo anterior: $" + saldoCuentaAnterior + "\nSaldo Descontado: $" + luz + "\nSaldo actual: $" + saldoCuenta);
                    break;
                case 3:
                    restarDinero(internet);
                    actualizarSaldoEnPantalla();
                    alert("Has pagado el servicio Internet" +
                        "\nSaldo anterior: $" + saldoCuentaAnterior + "\nSaldo Descontado: $" + internet + "\nSaldo actual: $" + saldoCuenta);
                    break;
                case 4:
                    restarDinero(telefono);
                    actualizarSaldoEnPantalla();
                    alert("Has pagado el servicio Teléfono" +
                        "\nSaldo anterior: $" + saldoCuentaAnterior + "\nSaldo Descontado: $" + telefono + "\nSaldo actual: $" + saldoCuenta);
                    break;
                default:
                    alert("No existe el servicio seleccionado")
            }
        }
    };
}

function transferirDinero() {
    const montoATransferir = parseInt(prompt("¿Cuánto desea transferir?"));
    const saldoCuentaAnterior = saldoCuenta;
    if (esTexto(montoATransferir)) {
        console.log("Salir de la funcion");

    } else if (montoATransferir > saldoCuenta) {
        alert("No tienes suficiente dinero para realizar la transferencia")
    } else {
        const cuentaATransferir = parseInt(prompt("¿A que número de cuenta desea transferir?"));
        if (cuentaATransferir == cuentaAmiga1 || cuentaATransferir == cuentaAmiga2) {
            restarDinero(montoATransferir);
            actualizarSaldoEnPantalla();
            alert("Se han transferido: $" + montoATransferir + "\nCuenta destino: " + cuentaATransferir + "\nSaldo actual: $" + saldoCuenta);
        } else {
            alert("Solo puedes transferir a una cuenta amiga, ingresa el numero de cuenta correcto");

        };
    };

}

function iniciarSesion() {
    const inicioSesion = parseInt(prompt("Ingresa tu código de seguridad"));

    if (inicioSesion == codigoSeguridad) {
        alert("Bienvenido/a " + nombreUsuario + ". Ya puedes comenzar a realizar operaciones");
    } else {
        restarDinero(saldoCuenta);
        actualizarSaldoEnPantalla();
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
    };

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