import {Vehiculo} from "./Vehiculo";

export class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, año: number, patente: string) {
        super(marca, modelo, año, patente);
    }
}