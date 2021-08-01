//Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden "+ladoCuadrado+ "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}  

// console.log ("El perimetro del cuadrado es: "+perimetroCuadrado()+ "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 

// console.log ("El area del cuadrado es: "+areaCuadrado()+ "cm^2");
console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del triangulo miden "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
// );
// console.log("La altura del triangulo mide " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo mide " + perimetroTriangulo() + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
// console.log("El area del triangulo mide " + areaTriangulo() + "cm^2")
console.groupEnd();


//Codigo del circulos
console.group("Circulos");
// const radioCirculo = 4;
// console.log("El radio del circulo mide " + radioCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
} 

// console.log("El diametro del circulo mide " + diametroCirculo() + "cm");
const PI = Math.PI;
// console.log("El PI mide " + PI + "cm");

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
} 

// console.log("El perimetro del circulo mide " + perimetroCirculo() + "cm");

function areaCirculo(radio) { 
    return (radio * radio) * PI;
} 

// console.log("El area del circulo mide " + areaCirculo() + "cm^2");
console.groupEnd();