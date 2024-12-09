import readlineSync = require("readline-sync");

// Aqui criei 2 variaveis e falei que elas são do tipo number
const numero1: Set<number> = new Set<number>();
const numero2: Set<number> = new Set<number>();

// Criei uma variavel chamada "i" que o valor começa com 1, depois verifica se essa "i" é menor ou igual a 10, o i++ faz o loop verificando se é verdadeira ou falsa, se for verdadeira ele imprimira o valor, se nao ele para de executar
for (let i = 1; i <= 10; i++) {
  const numerosEmOrdem1 = readlineSync.questionInt(`\nDigite o Numero ${i}: `); // Aqui o usuario digita os numeros que é verificada no i
  numero1.add(numerosEmOrdem1); // Adiciona o numero ao conjunto
}

for (let i = 1; i <= 10; i++) {
  const numerosEmOrdem2 = readlineSync.questionInt(`\nDigite o Numero ${i}: `);
  numero2.add(numerosEmOrdem2);
}

// Criei 2 variaveis setOrdenado onde seria uma array - number e dentro da array ele pegou os numeros para ordenar com a funcao sort
let setOrdenado1: Array<number> = Array.from(numero1).sort((a, b) => a - b);

let setOrdenado2: Array<number> = Array.from(numero2).sort((a, b) => a - b);

console.log("\nListar dados do Set: \n");
setOrdenado1.forEach((num1) => console.log(num1)); // Basicamente o forEach coloca os valores um em baixo do outro usando a funcao em array, e ele cria uma nova variavel num1 para nome temporário e nao dar confusao com a variavel numero1 usando também a funcao callback, e imprime corretamente uma em baixo da outra.

console.log("\nListar dados do Set: \n");
setOrdenado2.forEach((num2) => console.log(num2)); // Basicamente o forEach coloca os valores um em baixo do outro usando a funcao em array,e ele cria uma nova variavel num1 para nome temporário e nao dar confusao com a variavel numero2 usando também a funcao callback, e imprime corretamente uma em baixo da outra.
