// 1 . Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
// mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia = prompt ('Que dia é hoje?');
if (dia == "Sábado" || dia == "Domingo" || dia == "sabado" || dia == "domingo" || dia == "sábado") {
    alert ('Bom final de semana!')
} else {
    alert ('Boa Semana!')
};

// 2 . Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Informe um número a ser verificado:');
if (numero < 0 ) {
    alert('Este é um número negativo')
} else {
    alert('Este é um número positivo')
};

// 3 . Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100,
//  mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Qual foi sua pontuação final?');
if (pontuacao >= 100) {
    alert ('Parabéns, você venceu!!')
} else {
    alert ('Tente novamente para ganhar.')
};

// 4 . Crie uma mensagem que informa o usuário sobre o saldo da conta,
//  usando uma template string para incluir o valor do saldo.
let saldo =3200;
alert (`seu saldo é de R$${saldo}`);

// 5 . Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual é o seu nome?');
alert(`seja bem vindo ${nome}!`);

