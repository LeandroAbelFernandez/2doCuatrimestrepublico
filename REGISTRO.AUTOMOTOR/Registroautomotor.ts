import {Auto} from "./Autos";
import {Moto} from "./Motos";
import {Camion} from "./Camiones";

export class Registroautomotor{
    // private nombre:string;
    private registro1:Auto[];
    private registro2:Moto[];
    private registro3:Camion[];


    constructor(registro1:Auto[], registro2:Moto[],registro3:Camion[]){
        // this.nombre = nombre;
        this.registro1 = registro1;
        this.registro2 = registro2;
        this.registro3 = registro3;

    }
     // Getters
     public getRegistro1 (): Auto[]{
        return this.registro1;
    }
    public getRegistro2 (): Moto[]{
        return this.registro2;
    }
    public getRegistro3 (): Camion[]{
        return this.registro3;
    }
      // Setters
    // public setMarca(marca: string): void {
    //     this.marca = marca;
    // }
    
    public agregarAuto(auto: Auto): void {
        this.registro1.push(auto);
    }
    public agregarMoto(moto: Moto): void {
        this.registro2.push(moto);
    }
    public agregarCamion(camion: Camion): void {
        this.registro3.push(camion);
    }

    public eliminarVehiculo(patente: string): void {
        this.registro1 = this.registro1.filter((auto) => auto.getPatente() !== patente);
        this.registro2 = this.registro2.filter((moto) => moto.getPatente() !== patente);
        this.registro3 = this.registro3.filter((camion) => camion.getPatente() !== patente);

    }       
    public modificarVehiculo(patente: string, nuevoauto?:Auto, nuevamoto?:Moto, nuevocamion?:Camion):void{
        this.eliminarVehiculo(patente);
        if(nuevoauto){
         this.agregarAuto;
        }else if (nuevamoto){
        this.agregarMoto;
        }else if (nuevocamion){
        this.agregarCamion
        }
    }
}