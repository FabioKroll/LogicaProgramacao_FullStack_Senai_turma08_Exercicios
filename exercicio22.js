// Faça um programa que imprima os números ímpares de 0 a 50;


numerofinal = 50;
console.log("******* Números ímpares de 0 a 50 *******")
for (i=0; i<=50; i++){
    conta = i % 2;

    if (conta !=0){
        
        console.log(`${i}`)
    }
    
}