// Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário

numeroescolhido = 7;
console.log("Tabuada do número: " + numeroescolhido);

for (i=0; i<=10; i++){
    conta = i * numeroescolhido;
    console.log(`${numeroescolhido} x ${i} = ${conta}`);

}