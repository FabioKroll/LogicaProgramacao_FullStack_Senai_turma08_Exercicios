// Faça um programa que receba o nome, cargo e salário de um funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.

// Entrada
nome = "Fábio";
cargo = "Instrutor";
salario = 900;

// Processamento
    if (salario <= 1000)
    {
        correcao = salario * 0.1;
        sal = salario + correcao;
    }
    else 
    { 
        correcao = 0;
        sal = salario + correcao;
    }

// Saída
console.log("Nome: " + nome)
console.log("Cargo: " + cargo)
console.log("Salário: " + sal )