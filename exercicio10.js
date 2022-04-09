// Elabore um programa para cálculo de preços de produtos que solicite o preço de compra do produto e o percentual a ser aplicado em cima desse valor para a venda. Calcule e exiba o preço de venda do produto. Se o percentual a ser aplicado for inferior a 50%, exiba uma mensagem informando ao usuário que o produto será vendido com uma margem muito pequena de lucro.

// Entrada

precodoproduto = 10;
percentualdelucro = 60;

if (percentualdelucro < 50){
    console.log("Produto será vendido com uma margem de lucro muito pequena.");
    valor = precodoproduto + (percentualdelucro/100) * precodoproduto;
    console.log("Valor de venda: " + valor)

}
else {
    valor = precodoproduto + (percentualdelucro/100) * precodoproduto;
    console.log("Valor de venda: " + valor)
}