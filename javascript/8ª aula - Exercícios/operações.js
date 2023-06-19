let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let sinal = document.getElementById("sinal")
let resultado = document.getElementById("resultado")
let soma;

function calculo()
{
    switch(sinal.value)
    {
        case"+":
         soma = parseInt(valor1.value) + parseInt(valor2.value)
         resultado.innerHTML = soma
         break;
        
        case "-":
         subtracao = parseInt(valor1.value) - parseInt(valor2.value)
         resultado.innerHTML = subtracao
         break;
        
        case "*":
         mult = parseInt(valor1.value) * parseInt(valor2.value)
         resultado.innerHTML = mult
         break;
         
        case "/":
         div = parseInt(valor1.value) / parseInt(valor2.value)
         resultado.innerHTML = div
         break    
    }                    


}
                                    
                                        