// Enunciado: uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a 500 reais.
// Escreva um programa que receba o salário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito a aumento.

// Entrada
salario = 1000;

// Processamento e saída

if (salario < 500){
    correcao = salario + salario *0.3;
    console.log("Ajuste salario: " + correcao);
}
else{
    console.log("sem reajuste salarial, seu valor ainda é: " + salario);
}