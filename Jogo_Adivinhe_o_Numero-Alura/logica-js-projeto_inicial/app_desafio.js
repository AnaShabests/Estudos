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

DESAFIO FINAL
*/

alert("Bem vinde!!");
console.log("Bem vinde ao site!!");

let nome = prompt("Qual o seu nome");

alert(`Olá, ${nome}!!`);

let linguagem = prompt("Qual a sua linguagem de programação favorita?");
console.log(`A linguagem de programação favorita de ${nome} é ${linguagem}`);

let valor1 = prompt("Digite um número");
let valor2 = prompt("Digite outro número");
let resulSoma = valor1 + valor2;
let resultSubtracao = valor1 - valor2;
console.log(`A soma entre ${valor1} e ${valor2} é: ${resulSoma}`);
console.log(`A diferença ente ${valor1} e ${valor2} é: ${resultSubtracao}`);

let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Você É maior de idade");
} else {
    console.log("Você NÃO É maior de idade");
}

let numero = prompt("Digite um número");
if (numero > 0){
    console.log("O número é positivo");
} else if (numero < 0){
    console.log("O número é negativo");
} else {
    console.log("O número é 0");
}

let contagem = 1;
while (contagem <= 10){
    console.log(`O contador está em: ${contagem}`);
    contagem++;
}

let nota = prompt("Digite a sua nota");
if (nota >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let num1 = Math.random();
console.log(num1);
let num2 = (Math.random() * 10) + 1;
console.log(num2);
let num3 = (Math.random() * 1000) + 1;
console.log(num3);