export abstract class View<T> {

    private _elemento: JQuery
    private _escapar: boolean

    constructor(seletor: string, escapar: boolean = false) {
        
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T) {

        const t1 = performance.now();
        
        let template = this.template(model);
        
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        
        this._elemento.html(this.template(model));

        const t2 = performance.now();
        console.log(`Tempo de execução do método adiciona(): ${(t2 - t1)/1000} segundos`);
    }

    abstract template(model: T): string;
}