// Entrada
//cargo = "Produção";
//cargo = "Administrativo";
cargo = "Diretoria";

salario = 1000;

// Processamento e Saída
if (cargo == "Produção"){
    console.log("Cargo de Produção");
    ajuste = salario + salario * 0.065;
    console.log("Salario: " + ajuste);
}
if (cargo == "Administrativo"){
    console.log("Cargo de Administração")
    ajuste = salario + salario * 0.075;
    console.log("Salario: " + ajuste);
}
if (cargo == "Diretoria"){
    console.log("Cargo de Diretoria")
    ajuste = salario + salario * 0.012;
    console.log("Salario: " + ajuste);
}