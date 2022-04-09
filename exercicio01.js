// Enunciado: Faça um programa que receba a idade de uma pessoa em anos eimprima essa idade em: Meses, Dias, Horas, Minutos.

// Entrada //

let idade = 1;

// Processamento //

let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24;
let idadeMinutos = idadeHoras * 60;

// Saída //
console.log("Sua idade em meses é: " + idadeMeses + " meses")
console.log("Sua idade em dias é: " + idadeDias + " dias")
console.log("Sua idade em horas é: " + idadeHoras + " horas")
console.log("Sua idade em minutos é: " + idadeMinutos + " minutos")