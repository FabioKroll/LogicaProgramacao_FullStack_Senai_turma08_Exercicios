/* A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar o desenvolvimento de um sistema de cadastro para eventos que será disponibilizado para o público, o que, até então, era realizado manualmente.

Esse sistema terá como função principal a divulgação dos eventos para a comunidade de desenvolvimento, para que sejam consultados de forma eficiente.

Você será responsável por escolher qual técnica irá atender os seguintes requisitos:

Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
Listar participantes e palestrantes por evento.
Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema. */

// Entrada dos dados

idade = 19;

numeroinscricao = 20;

data = new Date();
diaatual = data.getDate ();
mesatual = data.getMonth ();
anoatual = data.getFullYear ();

diacadastro = 10;
mescadastro = 5;
anocadastro = 2022;


console.log("********** Idade **********");
console.log("Idade do Participante: "+ idade);

console.log("********** Número da Inscrição [1 a 100] **********");
console.log("Inscrição: "+ numeroinscricao);

console.log("********** Data **********");
console.log("Dia atual: "+ diaatual + " Dia do cadastro: " + diacadastro);
console.log("Mês atual: "+ mesatual + " Mês do cadastro: " + mescadastro);
console.log("Ano atual: "+ anoatual + " Dia do cadastro: " + anocadastro);

// Exigências do Programa

// Idade
if (idade < 18){
    console.log("Cadastro não permitido - Proibido menores de 18 anos!")
}
else {
        // Número da inscrição
        if (numeroinscricao < 0){
            console.log("Cadastro não permitido - Número de Inscrição Incorreto!")
        }
        else if (numeroinscricao > 100){
            console.log("Cadastro não permitido - Número de Inscrição Incorreto!")
        }
        else {
                // Data
                if (mescadastro < mesatual){
                    console.log("Cadastro não permitido! - Data Inválida!")
                }
                else if (anocadastro < anoatual){
                    console.log("Cadastro não permitido! - Data Inválida!")
                }
                else{
                    console.log("*************** \\\\ *************** //// ***************")
                    console.log("Cadastro realizado! - Bom Evento!")
                    console.log("*************** \\\\ *************** //// ***************")
                }

            }
}