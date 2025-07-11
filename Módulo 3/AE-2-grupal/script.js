const nombreDeCliente = "Pedro";

let papas = { precio: 500, cantidad: 5 };
let pan = { precio: 1200, cantidad: 3 };
let leche = { precio: 1000, cantidad: 5 };

let listaDeProductos = [papas, pan, leche];

const descuentoMinimo = 0;
const descuentoMaximo = 100;
const maximoDeArticulos = 5;

function calcularDescuento(monto, descuento) {
    const montoConDescuento = monto * (1 - descuento / 100);
    return montoConDescuento;
}

function comprar() {
    if (listaDeProductos.length === 0) {
        console.log("Por favor, ingrese productos para poder realizar la compra.");
    } else if (listaDeProductos.length <= maximoDeArticulos) {
        let totalDeCompra = 0;

        // Calculando el total usando un bucle for simple
        for (let i = 0; i < listaDeProductos.length; i++) {
            totalDeCompra += listaDeProductos[i].precio * listaDeProductos[i].cantidad;
        }

        if (totalDeCompra <= 100000 && totalDeCompra > 0) {
            let totalConDescuento = calcularDescuento(totalDeCompra, 10);
            console.log(`El valor a pagar con el descuento aplicado es de: ${totalConDescuento}`);
            return totalConDescuento;
        } else if (totalDeCompra > 100000) {
            console.log("Lo sentimos, supera el límite de monto máximo permitido en esta caja.");
        } else {
            console.log("Lo sentimos, no podemos procesar su compra, por favor pida asistencia a personal del supermercado.");
        }
    } else {
        console.log("Lo sentimos, no se pueden comprar más de 5 artículos diferentes.");
    }
}

comprar();
