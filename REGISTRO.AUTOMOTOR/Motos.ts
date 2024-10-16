export class Moto{
    private marca:string;
    private modelo:number;
    private año:number;
    private patente:string;

    constructor(marca:string,modelo:number,año:number, patente:string){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.patente=patente;
    }
    // Getters
    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): number {
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
    public setModelo(modelo: number): void {
        this.modelo = modelo;
    }    
    public setAño(año:number):void{
        this.año = año;
    }
    public setPatente(patente:string){
        this.patente = patente;
    }
}