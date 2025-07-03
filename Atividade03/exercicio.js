// Importando readline-sync.
const readline = require('readline-sync');

// Contadores
let contador21 = 0;
let contador50 = 0;

// Laço infinito para leitura das idades.

while(true){
    let idade = readline.questionInt("Digite uma idade. ");

    // Se idade for negativa, encerra o loop
    if(idade <= 0){
        break; // Parar Programa
    }

     // Se a idade for menor que 21, incrementa o contador21.
    if(idade < 21){
        contador21++; // (++) vai acrecentar mais 1 na minha variavel "contador21"
    }

    // Se a idade for maior que 50, incrementa o contador50.
    if(idade > 50){
        contador50++; // (++) vai acrecentar mais 1 na minha variavel "contador50"
 }
}
// Saida terminal
console.log(`\nTotal de pessoas menores de 21 anos ${contador21}`);
console.log(`Total de pessoas maiores de 50 anos ${contador50}`);