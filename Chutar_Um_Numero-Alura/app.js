let numeroSecreto = gerarNumeroAleatorio();

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

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1; //retorna na variável numeroSecreto
}

let tentativas = 1;

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Tente adivinhar o número secreto entre 1 a 10.');

function verificarChute(){
    console.log('O botão foi clicado');
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas'; //tentativas é maior que 1? se sim, a variável será tentativas, se não, a variável será tentativa
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', msgTentativas);
    } else {
        if (chute > numeroSecreto){
            exibirTexto('h1', 'Que pena! Tente novamente.');
            exibirTexto('p', 'O número secreto é menor.');
        } else if (chute < numeroSecreto){
            exibirTexto('h1', 'Que pena! Tente novamente.');
            exibirTexto('p', 'O número secreto é maior.');
        }
        tentativas++;
    }
}