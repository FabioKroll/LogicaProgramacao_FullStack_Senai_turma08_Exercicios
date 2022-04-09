// Faça um programa que receba 15 números inteiros e imprima na tela a somatória dos 15 números

qtdnumeros = 15;

conta = 0;
for(i=1; i<qtdnumeros; i++){
    conta = conta + i;
    console.log(`Soma Parcial (${i}): ${conta}`);
}

console.log("Soma Final: " + conta)