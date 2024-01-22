alert('Boas vindas ao nosso site!')
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro);
nome = prompt('Por favor, digite seu nome:');
idade = prompt('Por favor, digite sua idade');

if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}
else {
    alert('Você ainda não pode tirar a habilitação.')
};
