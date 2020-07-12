import { Negociacao } from './Negociacao'
import { Imprimivel } from './Imprimivel';

export class Negociacoes implements Imprimivel{

    // private _negociacoes: Array<Negociacao> = []; Abaixo o mesmo escrito de outra forma.
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao : Negociacao) {

        this._negociacoes.push(negociacao)
    }

    paraArray() : Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('--paraTexto--');
        console.log(JSON.stringify(this._negociacoes));
    }
}