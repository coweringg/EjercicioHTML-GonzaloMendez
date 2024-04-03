const handleClick = () => {
    console.log("Click")
}

function sumaNumeros(num1, num2) {
    return num1 + num2;
}

let resultado = sumaNumeros(10, 4);
console.log(resultado);

function sumar(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
}

