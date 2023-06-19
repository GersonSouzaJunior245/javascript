let base = document.getElementById("Valor1")
let altura = document.getElementById("Valor2")
let resultado = document.getElementById("Press")
let botao = document.getElementById("area")

botao.addEventListener('click', calcular)
function calcular()
{
    resultado.innerHTML = (parseInt(base.value) * parseInt(altura.value))/2
}
  
    
    


