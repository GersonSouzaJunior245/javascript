let salário = document.getElementById ("salário")
let tempo = document.getElementById ("tempo")

function Apertar()
{
    if(salário.value > 3000 && tempo.value > 5 )
    {
      alert("Você deve pagar impostos")
    }
    else
    {
      alert("Você não deve pagar impostos")
    } 
}