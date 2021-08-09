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
    const sumaList = obtenerList().reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );    
    input_media.innerText = "La media es: " + sumaList / obtenerList().length;
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
    const mitadList = obtenerList().length / 2;
    if(par()){
        let p2 = mitadList;
        let p1 = p2 - 1;
        mediana = (obtenerList()[p1]+ obtenerList()[p2]) / 2;
    }else{
        let p = parseInt(mitadList);
        mediana = obtenerList()[p];
    }
    input_mediana.innerText = "La mediana es: " + mediana;
}



