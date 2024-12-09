import readlineSync = require("readline-sync");
import { Queue } from "../fila/Queue";

const fila = new Queue<string>();

do {
  //Menu das opções do Banco
  console.log("\nBem-Vindo ao sistema de clientes do Banco Generation\n");
  console.log("\nEscolha uma das opcoes: ");
  console.log("\n1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da fila");
  console.log("0 - Sair\n");

  const opcoes = readlineSync.question("Digite uma opcao: ");

  switch (opcoes) {
    case "1":
      const nomeCliente = readlineSync.question("Digite o seu nome: ");
      fila.enqueue(nomeCliente);
      console.log(`\n${nomeCliente} adicionado a fila.\n`);
      break;
    case "2":
      console.log("\nNome dos clientes!\n");
      fila.printQueue();

      break;
    case "3":
      fila.dequeue();
      console.log(`removido com sucesso!`);
      fila.printQueue();
      break;
    case "0":
      console.log("Saindo...");
      process.exit(0);
    default:
      console.log("Opcao invalida");
  }
} while (true);
