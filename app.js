alert('Boas vindas ao jogo do numero secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let palpite = prompt('Escolha um número entre 1 e 10');

 // se o chute for igual ao numero secreto (numeroSecret0)
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o numero secreto! ${numeroSecreto}`);
} else {
   alert('Você errou') 
}