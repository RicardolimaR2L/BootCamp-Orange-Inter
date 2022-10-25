//para saber se um numero é par o resto da divisao dele tem que ser iga=ual a zero 

/*const numero =17;

const numeroPar =( numero % 2) === 0;

console.log(numeroPar)
// === é pra verfifcar igualdade
// == igual ignora o tipo da variavel 
*/


//condionais (if/else)
/*
const numero =2;

const numeroPar =( numero % 2) === 0;

console.log(numeroPar)

if(numeroPar){
   console.log('par'); 
} 
if(!numeroPar){ 
  console.log('impar'); 
  //a exclamaçao faz o sinal de negaçao 
} */


const numero =11;
const numeroDivisivelPor5 =(numero % 5) === 0;

if(numero === 0 ){
  console.log('o numero é invalido')
} else if(numeroDivisivelPor5) {
   console.log('sim', numero)
}else{
   console.log('não', numero)
}

//podemos colocar quantos else if  quisermos entreo if & else só vai ser muito confuso para entender