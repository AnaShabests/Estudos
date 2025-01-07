//let tituloPagina = document.querySelector('h1');
//tituloPagina.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Tente adivinhar o número secreto.';

//let paragrafo2 = document.querySelector('p:nth-child(3)');
//paragrafo2.innerHTML = 'Entre 1 a 10';

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Tente adivinhar o número secreto.');
exibirTexto('p:nth-child(3)', 'Entre 1 a 10');

function verificarChute(){
    console.log('O botão foi clicado');
}