function F_sumar(){
    var x,y,suma,text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    x = Number(x);
    y = Number(y);

        if (isNaN(x) || isNaN(y))
        {
            text = "Es necesario introducir dos números";
        }
        else
        {
            suma = parseFloat(x) + parseFloat(y);
            text = suma;
        }
    Document.getElementById("sumando").innerHTML = text
}