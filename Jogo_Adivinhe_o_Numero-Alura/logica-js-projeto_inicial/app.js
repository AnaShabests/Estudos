alert("Bem vindo ao jogo do número secreto!!"); //alert serve para exibir uma mensagem em uma caixinha assim que o usuário acessar a página
//não é sempre que se utiliza o ;
let numeroMaximo = 100;
//Math.random() gera um número aleatório entre 0(incluso) e 1 (não incluso)
//let numeroSecreto = parseInt(Math.random() * 10 + 1); //parseInt serve para transformar o número em inteiro; *10 pq queremos um número entre 0 e 9 (pois o 1 n é incluso); +1 pq queremos um número entre 1 e 10
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1; //parseInt serve para transformar o número em inteiro; *100 pq queremos um número entre 0 e 99 (pois o 1 n é incluso); +1 pq queremos um número entre 1 e 100

//let comando para armazenar na memória
//let numeroSecreto = 9;
console.log("O número secreto é: ", numeroSecreto);

let chute; //prompt serve para exibir uma caixinha para interagir com o usuário
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        console.log("Parabéns, você acertou :)");
        break;
    } else {
        if (chute > numeroSecreto) {
            console.log(`O número secreto é menor que seu chute`);
            alert(`O número secreto é menor que ${chute}`);
        } else {
            console.log(`O número secreto é maior que seu chute`);
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//substituir o if else
//Operador Ternário

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; //tentativas é maior que 1? Se sim, imprimirá "tentativas", se não, imprimirá "tentativa"
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if (tentativas > 1) {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`); // `${ }` é uma das formas para concatenar variáveis - crase (template string)
} else {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/