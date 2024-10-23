alert("Bem vindo ao jogo do número secreto!!"); //alert serve para exibir uma mensagem em uma caixinha assim que o usuário acessar a página
//não é sempre que se utiliza o ;

//let comando para armazenar na memória
let numeroSecreto = 9;
console.log("O número secreto é: ", numeroSecreto);

let chute; //prompt serve para exibir uma caixinha para interagir com o usuário
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 1 a 10");

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

if (tentativas > 1) {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`); // `${ }` é uma das formas para concatenar variáveis - crase (template string)
} else {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}