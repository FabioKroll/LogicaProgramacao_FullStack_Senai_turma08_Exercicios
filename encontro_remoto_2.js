// Exercício proposto no encontro remoto 02 - 08 de Abril de 2022

alunos = 16;

    for (i = 0; i <=16; i++)
    {
        conta = i % 2;

        
        if (i == 0){
            
            console.log (`${i} - O número ${i} é zero!`)
        }

        else if (conta ==0)
        {
            
            console.log (`${i} - O número ${i} é par!`)
        }

        else {
            console.log (`${i} - O número ${i} é ímpar!`)
        }

    }