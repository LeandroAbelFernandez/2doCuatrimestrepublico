import { Paladin } from "./paladin";
import { Luchador } from "./Luchador";
import { Mago } from "./mago";
import { Arquero } from "./arquero";

let luchador=new Luchador("luchador!",10,100);
let mago=new Mago("Mago",5,21);
let arquero=new Arquero("Arquero!",121,90);
let paladin = new Paladin("Paladin", 5, 100);


mago.atacar();
mago.defender();
luchador.atacar();
luchador.defender();
arquero.atacar();
arquero.defender();

paladin.atacar();   
paladin.defender(); 
paladin.curar(luchador);
paladin.curar(arquero);
paladin.curar(mago);