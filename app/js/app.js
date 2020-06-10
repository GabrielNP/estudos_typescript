let negociacao = new Negociacao(new Date(), 2, 100);
console.log(negociacao);

let negociacao3 = new Negociacao(new Date(), 1, 200);
negociacao3._quantidade = 3;
console.log(negociacao3._quantidade);

let negociacao2 = new Negociacao();
console.log(negociacao2);