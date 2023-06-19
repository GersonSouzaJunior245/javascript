function mult(a,b)
{
    return a*b
}

let mult = (a,b) => 
{
   return a*b
}
//Sintaxe da Função é definida com a function palavra-chave, seguida por um nome, seguido por parênteses().
//Quanto o JavaScript atinge uma return instruções, a função para de ser executada.
//Se a função foi invocada a partir de uma instrução, o JavaScript "retornará" para o executar o código após instrução invocada.
let celsius = document.getElementById("Celsius")
let resultado = document.getElementById("resultado")

function toCelsius()
{
   return resultado.innerHTML = (celsius.value*1.8) + 32
}

//Crie uma função no qual utilize parâmetros para descobrir se o valor é par ou ímpar.

function Par(q)
{
    if(q % 2 == 0)
    {
        return console.log("Par")
    }
    else
    {
        return console.log("Impar")    
    }
}
//Escreva uma função que retorne o maior de dois números

function Maior(c,d)
{
    if ( c > d)
    {
        return console.log(c)
    }
    else
    {
        return console.log (d)
    }
}

const Maior = (c,d) => {c>d? console.log(c) : console.log(d)}