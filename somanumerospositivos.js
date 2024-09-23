
// Soma dos Números Positivos: Crie um programa que peça ao usuário para inserir números inteiros. 
// O programa deve continuar solicitando números enquanto o usuário inserir números positivos. 
// Se o usuário inserir um número negativo, o programa deve parar e imprimir a soma dos números positivos inseridos. 
// Utilize while para o loop e if para verificar se o número é positivo ou negativo.

const prompt = require("prompt-sync")();
let soma = 0; 
let numero = parseInt(prompt("Coloque o valor positiv: "));

while(numero>= 0){//usei >= para quando for usado = 1+0=1
    soma+= numero;

    numero = parseInt(prompt("insira outro valor positivo: "));
}
console.log("numero negativo não pode, esse é o resultado: "+soma)