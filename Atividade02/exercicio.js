// Importando readline-sync.
const readline = require('readline-sync');

// Variavel contador
let contadorPar = 0;
let contadorImpar = 0;

// Laço para ler 10 números.
for (let i = 1; i <= 10; i++) {
    // Perguntando ao usuário o número i.
    let num = readline.questionInt(`Digite o ${i}º número: `);

    // Verificando se o número é par ou ímpar.
    if (num % 2 === 0) {
        contadorPar++; // (++) icrementar a minha variavel mais 1
    } else {
        contadorImpar++; // (++) icrementar a minha variavel mais 1
    }
}

// Sainda terminal.
console.log(`\nTotal de números pares: ${contadorPar}`);
console.log(`Total de números ímpares: ${contadorImpar}`);