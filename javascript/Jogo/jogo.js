let NomeDoJogador;
let resposta;

NomeDoJogador = document.getElementById("NomeDoJogador")
resposta = document.getElementById("resposta")

function EnviarNome()
{
    if(NomeDoJogador.value == "")
    {
        alert("Insira um nome")
    }
    resposta.innerHTML = "Olá " + NomeDoJogador.value + ", Vamos jogar!"
}