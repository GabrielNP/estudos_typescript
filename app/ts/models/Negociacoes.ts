class Negociacoes {

    // private _negociacoes: Array<Negociacao> = []; Abaixo o mesmo escrito de outra forma.
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao : Negociacao) {

        this._negociacoes.push(negociacao)
        console.log("Também adicionei a negociação!")
    }

    paraArray() : Negociacao[] {

        return [].concat(this._negociacoes);
    }
}