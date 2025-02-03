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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //retorna na variável numeroSecreto
    let qntdElementosLista = listaNumeroSorteado.length;

    if (qntdElementosLista == numeroLimite){
        listaNumeroSorteado = [];
    }

    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaNumeroSorteado.push(numeroEscolhido); //Adicionando o numeroEscolhido na lista
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function textoInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Tente adivinhar o número secreto entre 1 a 10.');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    //Mudar o texto assim que clicar no Novo Jogo
    textoInicial();

    //Habilita e desabilita o botão, para jogar até o final
    document.getElementById('reiniciar').setAttribute('disabled', false);
}

let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

textoInicial();

function verificarChute(){
    //console.log('O botão foi clicado');
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Parabéns!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //tentativas é maior que 1? se sim, a variável será tentativas, se não, a variável será tentativa
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        console.log(numeroSecreto)
        exibirTexto('p', msgTentativas);

        //Ativar o botão Novo Jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute >= numeroSecreto){
            exibirTexto('h1', 'Que pena! Tente novamente.');
            exibirTexto('p', 'O número secreto é menor.');
        } else if (chute < numeroSecreto){
            exibirTexto('h1', 'Que pena! Tente novamente.');
            exibirTexto('p', 'O número secreto é maior.');
        }

        tentativas++;
        limparCampo();
    }
}