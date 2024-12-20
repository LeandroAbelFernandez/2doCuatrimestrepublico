import { Personaje } from "./personaje";


export class Paladin extends Personaje{
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
        public curar(personaje:Personaje):void{
            personaje.setVida(personaje.getPuntosDeVida()*2);
            console.log(`paladin esta multiplicando los puntos de vida de ${personaje.getNombre()} ahora tiene ${personaje.getPuntosDeVida()} puntos de vida`)
        }
    
    }
