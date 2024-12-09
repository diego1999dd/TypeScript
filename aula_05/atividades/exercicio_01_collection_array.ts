import readlineSync = require("readline-sync");

// Set elimina duplicatas automaticamente
const cores: Set<string> = new Set<string>();

// Criei uma variavel chamada "i" que o valor começa com 0, depois verifica se essa "i" é menor a 5, o i++ faz o loop verificando se é verdadeira ou falsa, se for verdadeira ele imprimira o valor, se nao ele para de executar
for (let i = 0; i < 5; i++) {
  const cor = readlineSync.question(`Digite a cor ${i + 1}: `); // Aqui o usuario digita as cores que é verificada no i, coloquei i+1 para ele começar com a 1 cor
  cores.add(cor); // Adiciona a cor ao conjunto
}

// Exibi ao usuario quais foram as cores que ele digitou
console.log("\nCores digitadas: \n");
console.log([...cores]); // Exibe as cores armazenadas

// Criei uma variavel setOrdenado onde seria uma array - string e dentro da array ele pegou as cores para ordenar com a funcao sort
let setOrdenado: Array<string> = Array.from(cores).sort();

console.log("\nOrdenar as cores: \n");
setOrdenado.forEach((cor) => console.log(cor)); // Basicamente o forEach coloca os valores um em baixo do outro usando a funcao em array, e ele pega a variavel cor, e imprime corretamente uma em baixo da outra.
