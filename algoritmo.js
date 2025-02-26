function F_sumar() {
    var x, y, suma, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números";
    } else {
        suma = parseFloat(x) + parseFloat(y);
        text = suma;
    }

    // Usa "text" para mostrar el mensaje final
    document.getElementById("sumando").innerHTML = text;
    console.log("hola mundo");
}

function F_resta() {
    var x, y, resta, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números";
    } else {
        resta = parseFloat(x) - parseFloat(y);
        text = resta;
    }

    // Usa "text" para mostrar el mensaje final
    document.getElementById("diferencia").innerHTML = text;
}

function F_multiplicacion() {
    var x, y, producto, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números";
    } else {
        producto = parseFloat(x) * parseFloat(y);
        text = producto;
    }

    // Usa "text" para mostrar el mensaje final
    document.getElementById("producto").innerHTML = producto;
}

function F_division() {
    var x, y, cociente, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números";
    } else {
        cociente = parseFloat(x) / parseFloat(y);
        text = cociente;
    }

    // Usa "text" para mostrar el mensaje final
    document.getElementById("cociente").innerHTML = cociente;
}
