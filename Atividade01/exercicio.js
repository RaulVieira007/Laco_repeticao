// Importando readline-sync.
const readline = require('readline-sync');

// Recebendo os valores inteiros A e B
let A = readline.questionInt("Digite o primeiro número do intervalo: ");
let B = readline.questionInt("Digite o último número do intervalo: ");

// Verificando se o intervalo é inválido (A deve ser menor que B)
if (A >= B) {
    console.log("Intervalo inválido!");
    process.exit(); // Encerra o programa caso o intervalo seja inválido
}

// Exibindo mensagem entre o intervalo (A) e (B)
console.log(`\nNo Intervalo entre ${A} e ${B}:\n`);

// Percorrendo o intervalo de A até B
for (let i = A; i <= B; i++) {
    // Verificando se i é múltiplo de 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`); 
    }
}