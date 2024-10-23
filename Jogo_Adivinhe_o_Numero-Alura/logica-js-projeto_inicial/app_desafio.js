/*
DESAFIO 1
alert("Boas Vindas ao nosso site!!");

//let comando para armazenar na memória
let nome = "Lua";
let idade = 18;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

if (idade >= 18) {
    console.log("Parabéns, já pode tirar a habilitação!!");
    alert("Parabéns, já pode tirar a habilitação!!");
} else {
    console.log("NÃO pode tirar a habilitação!!");
    alert("NÃO pode tirar a habilitação!!");
    }

DESAFIO 2
alert("Boas Vindas ao nosso site!!");

let diaSemana = prompt("Digite o dia da semana").toLowerCase();

if (diaSemana == "sábado" || diaSemana == "domingo") {
    console.log("Hoje é dia de descanso!!");
    alert("Hoje é dia de descanso!! Bom dinal de semana!!");
}else{
    console.log("Hoje é dia de trabalho!!");
    alert("Hoje é dia de trabalho!! Boa semana!!");
}

DESAFIO 3
alert("Boas Vindas ao nosso site!!");

let numero = prompt("Digite um número");

if (numero >= 0) {
    console.log("O número é positivo");
    alert("O número é positivo");
}else{
    console.log("O número é negativo");
    alert("O número é negativo");
}

DESAFIO 4
let pontuacao = prompt("Digite a sua pontuação");
if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
    alert("Parabéns, você venceu!")
}else{
    console.log("Que pena, você perdeu!");
    alert("Que pena, você perdeu!")
}

DESAFIO 5
let saldo = 1000;

alert("Você quer ver seu saldo: ");
let resposta = prompt("Digite 'sim' ou 'não'").toLowerCase();

if (resposta == "sim") {
    console.log("Seu saldo é: ", saldo);
    alert(`Seu saldo é: R$${saldo}`);
}else{
    console.log("Obrigado por acessar nosso site!!");
    alert("Obrigado por acessar nosso site!!");
}

DESAFIO 6
alert("Boas Vindas ao nosso site!!");
let nome = prompt("Digite o seu nome");

alert(`Bem vinde ${nome}!!`);

DESAFIO 7
alert("Boas Vindes ao nosso site!!");
let contador = 1;
while (contador <= 10) {
    console.log("O contador está em: ", contador);
    alert(`O contador está em: ${contador}`);
    contador++;
}

DESAFIO 8
let contador = 10;
while (contador >= 0){
    console.log("O contador está em: ", contador);
    alert(`O contador está em: ${contador}`);
    contador--;
}

DESAFIO 9
let numero = prompt("Digite um número");
while (numero >= 0){
    console.log(`O numero está em: ${numero}`);
    alert(`O numero está em: ${numero}`);
    numero--;
}

*/