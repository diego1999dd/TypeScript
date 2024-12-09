import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Prato azul");
pilha.push("Prato verde");
pilha.push("Prato vermelho");

pilha.printStack();

console.log(pilha.contains("Prato branco"));

pilha.pop();

pilha.printStack();
