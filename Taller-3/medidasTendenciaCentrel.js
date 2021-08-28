const obtenerList = () => {
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const n3 = document.getElementById("n3");
    const n4 = document.getElementById("n4");
    const n5 = document.getElementById("n5");
    const n6 = document.getElementById("n6");
    var num1 = parseInt(n1.value);
    var num2 = parseInt(n2.value);
    var num3 = parseInt(n3.value);
    var num4 = parseInt(n4.value);
    var num5 = parseInt(n5.value);
    var num6 = parseInt(n6.value);
    const list = [num1, num2, num3, num4, num5, num6];
    return list;
}   

const calcularMedia = () => {
    //el metodo reduce permite hacer cualquier operacion a la medida que recorre el array
    const sumaList = obtenerList().reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    let promedio = sumaList / obtenerList().length;
    input_media.innerText = "La media es: " + promedio.toFixed(2);
}

const par = () => {
    if (((obtenerList().length) % 2) === 0) {
        return true;
    }else {
        return false;
    }
}

const calcularMediana = () => {
    let mediana = 0;
    //Ordeno una lista de numeros
    const numerosOrdenados = obtenerList();
    numerosOrdenados.sort((a,b) => a-b);
    const mitadList = numerosOrdenados.length / 2;

    if(par()){
        let p2 = mitadList;
        let p1 = p2 - 1;
        mediana = (numerosOrdenados[p1]+ numerosOrdenados[p2]) / 2;
    }else{
        let p = parseInt(mitadList);
        mediana = numerosOrdenados[p];
    }

    input_mediana.innerText = "La mediana es: " + mediana;
}

const calcularFrecuencia = () => {
    const listaCount = {};
    obtenerList().map(
        function (elemento) {
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            }else {
                listaCount[elemento] = 1;
            }
        }
    );
    return listaCount;
}


const ordenarArray = () => {
    const listArray = Object.entries(calcularFrecuencia()).sort(
        function (elementoA, elementoB) { 
            return elementoA[1] - elementoB[1];
        }
    );
    return listArray;
}

const calcularModa = () => {
    const ultimo = ordenarArray()[(ordenarArray().length)-1];
    const penultimo = ordenarArray()[(ordenarArray().length)-2];
    if (ultimo[1]==penultimo[1]) {
        input_moda.innerText = "La moda es: " + ultimo[0] + " y " + penultimo[0];
    }else {
        const moda = ultimo;
        input_moda.innerText = "La moda es: " + moda[0];
    }
}


