// Enunciado
// Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual. Calcule e imprima:
// a) A idade dessa pessoa
// b) Essa idade converdida em semana

// Entrada

let anoAtual = 2022;
let anoNascimento = 2021;

// Processamento
let idade = anoAtual - anoNascimento;

let x = 4 // Um mês tem 4 semanas
let y = 12*x // Um ano tem 12 * X semanas
let idadeSemanas = idade * y;

// Saída
console.log("Sua idade é: " + idade + " anos")
console.log("Sua idade em semanas é: " + idadeSemanas + " semanas")