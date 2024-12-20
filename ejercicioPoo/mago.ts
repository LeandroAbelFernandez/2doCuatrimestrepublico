import { Personaje } from "./personaje";

export class Mago extends Personaje{

    constructor(nombre:string,nivel:number, vida:number){
        super(nombre,nivel, vida)
    }
    
        atacar(): void {
            this.setNivel(this.getNivel()+1)
            console.log(`${this.getNombre()} Esta atacando!, subio al nivel ${this.getNivel()} y tiene ${this.getPuntosDeVida()}`)
    
        }
        defender(): void {
            this.setVida(this.getPuntosDeVida()-20);
            console.log(`${this.getNombre()} Esta defendiendo!, le queda ${this.getPuntosDeVida()} puntos de vida`)
    
        }
    
    }