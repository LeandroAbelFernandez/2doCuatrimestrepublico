import { Personaje } from "./personaje";

export class Arquero extends Personaje{

    constructor(nombre:string,nivel:number, vida:number){
        super(nombre,nivel, vida)
    }
    
    atacar(): void {
        console.log(`${this.getNombre()} Esta atacando!, no suma nada, su nivel es: ${this.getNivel()} y tiene ${this.getPuntosDeVida()} puntos de vida`)

    }
    defender(): void {
        this.setVida(this.getPuntosDeVida()+1);
        this.setNivel(this.getNivel()+1)
        console.log(`${this.getNombre()} Esta defendiendo!, sumo ${this.getPuntosDeVida()} puntos de vida`)
        
    }
    
    }