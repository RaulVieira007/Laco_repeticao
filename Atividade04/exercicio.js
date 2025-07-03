// Importando readline-sync.
const readline = require('readline-sync');

// Variável soma.
let soma = 0;

// Laço de repetição.
do {
    let entradaDeDados = readline.questionInt("Digite um número (0 para parar): ");
    
    if (entradaDeDados > 0) {
        soma += entradaDeDados; // Só soma se for positivo
    } else if (entradaDeDados === 0) { // Até que o número (0) Seja digitado.
        break; // Encerra o loop se for 0
    }

    // Números negativos são ignorados automaticamente

} while (true);

// Limpando Terminal.
console.clear();

//Saida No Terminal.
console.log(`A soma dos números positivos é: ${soma}`);