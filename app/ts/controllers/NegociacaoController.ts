import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacao, Negociacoes } from '../models/index'
import { domInject, throttle } from '../helpers/decorators/index'
import { NegociacaoService } from '../services/index'

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();

    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {

        let data = new Date(this._inputData.val().replace('-','/'));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somenete negociações em dias úteis!');
            return
        }

        const negociação = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
            );

        this._negociacoes.adiciona(negociação);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados() {

        function isOk(res: Response) {

            if (res.ok) return res;
            else    throw new Error(res.statusText);
        }

        this._service
            .obterNegociacoes(isOk)
            .then((negociacoes: Negociacao[]) => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            //     this._negociacoesView.update(this._negociacoes);
            // })
            // .catch((err: Error) => {
            //     this._mensagemView.update('Não foi possível importar os dados.');
            //     console.log(err.message);
            });
    }
}

enum DiaDaSemana {

    Domingo, 
    Segunda, 
    Terca, 
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado
}