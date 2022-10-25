/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

//solução

const precoEtiqueta = 100

const formaDePagamento = 4 //aqui é Realizada a escolha da forma de pagamento

if (formaDePagamento === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1)
} else if (formaDePagamento === 2) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15)
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta)
} else {
  console.log(precoEtiqueta + precoEtiqueta * 0.1)
}

//aqui foi feito a enumeraçao das formas de pagamento no enunciado, em seguida selecionamos a forma de pagamento dentro das opções e realizamos o calcúlo. cada forma de pagamento esta passando por uma condiçao que valida a forma de pagamento e realiza o calcúlo.
