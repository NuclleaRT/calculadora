



function suma() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = +num1 + +num2; 
    MostrarResultado(resultado);
}

function resta() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = +num1 - +num2; 
    MostrarResultado(resultado);
}


function multiplicacion() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = +num1 * +num2; 
    MostrarResultado(resultado);
}


function division() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = +num1 / +num2; 
    MostrarResultado(resultado);
}


function potencia() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = Math.pow(+num1,+num2)  ; 
    MostrarResultado(resultado);
}



function potencia() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = Math.pow(+num1,+num2)  ; 
    MostrarResultado(resultado);
}


function potencia() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = Math.pow(+num1,+num2)  ; 
    MostrarResultado(resultado);
}


function raiz() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = Math.sqrt(+num1)  ; 
    MostrarResultado(resultado);
}


function absoluto() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let resultado = Math.abs(+num1)  ; 
    MostrarResultado(resultado);
}


function random() {
    let minimo = +document.getElementById('num1').value;
    let maximo = +document.getElementById('num2').value;

    maximo = maximo + 1;
    let resultado = Math.floor(Math.random() * (maximo - minimo) + minimo); 
    MostrarResultado(resultado);
}


function MostrarResultado(resultado){
    document.getElementById('textoResultado').value = resultado;
}
