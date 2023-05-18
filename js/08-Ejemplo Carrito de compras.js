/* Ejemplo

    la variable "total" va sumando el numero de precios que entran a la funcion

*/
let total = 0;

function carrito(precio) {
    return total += precio;
}
function calcularImpuestos(total) {
    return total * 1.15;
}

total = carrito(400);
total = carrito(400);
total = carrito(200);



const totalPagar = calcularImpuestos(total);

console.log(total); //1000
console.log(totalPagar); //1150

