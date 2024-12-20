import { Personaje } from "./personaje";

export class Luchador extends Personaje{

constructor(nombre:string,nivel:number, vida:number){
    super(nombre,nivel, vida)
}

atacar(): void {
    this.setNivel(this.getNivel()+1)
    this.setVida(this.getPuntosDeVida()-2);
    console.log(`${this.getNombre()} Esta atacando!, subio al nivel ${this.getNivel()} y le quedan ${this.getPuntosDeVida()}`)

}
defender(): void {
    this.setVida(this.getPuntosDeVida()-5);
    console.log(`${this.getNombre()} Defiende!, le queda ${this.getPuntosDeVida()} puntos de vida`)

}
}