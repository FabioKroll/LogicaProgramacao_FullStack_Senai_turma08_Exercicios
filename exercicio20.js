// Entrada
nome = "Kirk";
salario = 1000;
codigo = 2; // 1, 2, 3, 4, 5


// Processamento e saída
if (codigo == 1)
{
    cargo = "escrituário";
    ajuste = salario + 0.5 * salario;
    console.log("Nome: "+ nome + " Salário: " + ajuste + " Cargo: " + cargo)
}

else if (codigo == 2)
{
    cargo = "secretario";
    ajuste = salario + 0.35 * salario;
    console.log("Nome: "+ nome + " Salário: " + ajuste + " Cargo: " + cargo)
}

else if (codigo == 3)
{
    cargo = "caixa";
    ajuste = salario + 0.20 * salario;
    console.log("Nome: "+ nome + " Salário: " + ajuste + " Cargo: " + cargo)
}

else if (codigo == 4)
{
    cargo = "gerente";
    ajuste = salario + 0.10 * salario;
    console.log("Nome: "+ nome + " Salário: " + ajuste + " Cargo: " + cargo)
}

else if (codigo == 5)
{
    cargo = "diretor";
    ajuste = salario + 0.00 * salario;
    console.log("Nome: "+ nome + " Salário: " + ajuste + " Cargo: " + cargo)
}