export class Auto{
    private marca:string;
    private modelo:string;
    private año:number;
    private patente:string;

    constructor(marca:string,modelo:string,año:number, patente:string){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.patente=patente;
    }
    // Getters
    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }
    public getAño(): number {
        return this.año;
    }
    public getPatente(): string {
        return this.patente;
    }


    // Setters
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }    
    public setAño(año:number):void{
        this.año = año;
    }
    public setPatente(patente:string){
        this.patente = patente;
    }
}