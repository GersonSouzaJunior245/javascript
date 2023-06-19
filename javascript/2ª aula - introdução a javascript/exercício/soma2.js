var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var N3 = document.getElementById("N3");
var N4 = document.getElementById("N4");
var Resultado = document.getElementById("Resultado");
var media;

function MEDIA()
{
    N1.value; 
    N2.value;
    N3.value;
    N4.value;
    media = (parseInt(N1.value) + parseInt(N2.value) + parseInt(N3.value) + parseInt(N4.value))/4 ;
    Resultado.innerHTML = media;

}

var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var N3 = document.getElementById("N3");
var N4 = document.getElementById("N4");
var Resultado = document.getElementById("Resultado");
var total;

function TOTAL()
{
    N1.value; 
    N2.value;
    N3.value;
    N4.value;
    total = [parseInt(N1.value) + parseInt(N2.value) + parseInt(N3.value) + parseInt(N4.value)]*5 ;
    Resultado.innerHTML = total;

}