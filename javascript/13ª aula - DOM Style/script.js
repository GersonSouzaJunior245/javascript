let titulo = document.getElementById('titulo');
titulo.style.textAlign = 'center'
titulo.style.backgroundColor = '#ccc';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

titulo.innerHTML = 'Olá meu querido prof'

let itens = document.getElementsByClassName('item')
console.log(itens);
itens[1].innerHTML = 'Olá'
itens[1].style.backgroundColor = 'yellow'