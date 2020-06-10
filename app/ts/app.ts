let negociacao = new Negociacao(new Date(), 2, 100);
console.log(negociacao);

// Por enquanto nada impede que o programador acesse o atributo privado e altere seu valor.
let negociacao3 = new Negociacao(new Date(), 1, 200);
negociacao3._quantidade = 3;
console.log(negociacao3._quantidade);

// Apesar de haver um lançamento de exceção no construtor da classe, por enquanto nada impede o programador de criar um objeto vazio da classe.
let negociacao2 = new Negociacao();
console.log(negociacao2);