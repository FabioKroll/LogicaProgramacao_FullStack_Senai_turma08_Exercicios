// Entrada
idade = 65;

// Processamento e saída
if (idade < 0){
    console.log("Idade incorreta!")
}
else if (idade > 0 && idade < 2)
{
    console.log("Recém-Nascido!")
}

else if (idade > 3 && idade < 11)
{
    console.log("Criança!")
}

else if (idade > 12 && idade < 19)
{
    console.log("Adolescente!")
}

else if (idade > 20 && idade < 55)
{
    console.log("Adulto!")
}

else if (idade > 55)
{
    console.log("Idoso!")
}