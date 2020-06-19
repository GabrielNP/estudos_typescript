export abstract class View<T> {

    private _elemento: JQuery
    private _escapar: boolean

    constructor(seletor: string, escapar: boolean = false) {
        
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T) {
        
        let template = this.template(model);
        
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}