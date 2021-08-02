const calcularPrecio = (precio, descuento) => precio * (100 - descuento)/100;

const precio = document.getElementById("precio");
const descuento = document.getElementById("descuento");

function calcularValorPagar () {
respuesta.innerText ="$" + calcularPrecio(precio.value, descuento.value);
}