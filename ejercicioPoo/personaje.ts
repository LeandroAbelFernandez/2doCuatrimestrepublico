export abstract class Personaje {
    
        private nombre:string;
        private nivel:number;
        private puntosDeVida:number;
    
        constructor(nombre:string,nivel:number,puntosDeVida:number){
            this.nombre=nombre;
            this.nivel=nivel;
            this.puntosDeVida=puntosDeVida;
        }

        public getNombre(): string {
            return this.nombre;
        }
        public getNivel():number{
            return this.nivel;
        }
        public getPuntosDeVida():number{
            return this.puntosDeVida

        }
        public setNivel(nivel:number):void{
            this.nivel=nivel;
        }
        public setVida(vida:number):void{
            this.puntosDeVida=vida;
        }
        

abstract atacar(): void;

abstract defender():void;

}