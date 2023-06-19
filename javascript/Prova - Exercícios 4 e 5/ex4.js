let N1 = document.getElementById("HTML");
let N2 = document.getElementById("CSS");
let N3 = document.getElementById("Javascript");
let aprovado = document.getElementById("resultado");
let GerarMedia;

function media()
{
   GerarMedia = (parseInt(N1.value) + parseInt(N2.value) + parseInt(N3.value))/3;
   if(GerarMedia >= 7)
   {
     aprovado.innerHTML = "A sua nota foi " + GerarMedia + " você foi aprovado"
   }
   else
   {
    aprovado.innerHTML = "A sua nota foi " + GerarMedia + " você foi reprovado"
   }
}