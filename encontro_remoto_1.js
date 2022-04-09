// A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar
//a programação de um sistema de cadastro de peças que deverá atender os seguintes requisitos:

// 1 - Se a peça possuir peso superior a 100 gramas, pode cadastrar

// 2 - Dada a capacidade de caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente;

// 3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let listaPecas = ["Item 01", "Item 02", "Item 03"]; // Caixa - Lista
let nomePeca = "Estabilizador";
let pesoPeca = 350;


console.log("A quantidade de peças: " + listaPecas.length); // Tamanho da lista

if (listaPecas.length >=10){ // Não tem espaço na lista
    console.log("Não tem capacidade suficiente! Limite superior à 10 atingido.")
}
else {//tem espaço na lista

    if(pesoPeca >=100){
        console.log("Pode cadastrar!")
            
            if (nomePeca.length <= 3 ){
                    console.log("Atenção - Não pode cadastrar nome de peça com menos de 3 caracteres!")
            }

    }
}

