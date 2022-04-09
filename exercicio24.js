// Faça um programa que imprima na tela a tabuada de 1 a 10


for (j = 1; j <=10; j++){

    numeroescolhido = j;
    console.log("Tabuada do número: " + numeroescolhido);

    for (i=0; i<=10; i++){
        conta = i * numeroescolhido;
        console.log(`${numeroescolhido} x ${i} = ${conta}`);

    }
}