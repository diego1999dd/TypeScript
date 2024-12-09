import readlineSync = require("readline-sync");
import { Stack } from "../fila/Stack";

const pilha = new Stack<string>();

do {
  //Menu das opções de livros
  console.log("\nBem-Vindo ao sistema de livros\n");
  console.log("\nEscolha uma das opcoes: ");
  console.log("\n1 - Adicionar Livro na pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da pilha");
  console.log("0 - Sair\n");

  const opcoes = readlineSync.question("Digite uma opcao: ");

  switch (opcoes) {
    case "1":
      const nomeLivro = readlineSync.question("Digite o nome do livro: ");
      pilha.push(nomeLivro);
      console.log(`\nO livro ${nomeLivro} adicionado!.\n`);
      break;
    case "2":
      console.log("\nNome dos Livros!\n");
      pilha.printStack();

      break;
    case "3":
      pilha.pop();
      console.log(`Removido com sucesso!`);
      pilha.printStack();
      break;
    case "0":
      console.clear();
      console.log("Saindo...");
      process.exit(0);
    default:
      console.log("Opcao invalida");
  }
} while (true);
