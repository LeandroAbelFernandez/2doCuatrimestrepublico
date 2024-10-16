import {Auto} from "./Autos";
import {Moto} from "./Motos";
import {Camion} from "./Camiones";
import {Registroautomotor} from "./Registroautomotor";

let auto1=new Auto ("FIAT","DUNA",1990,"RTT777");
let auto2=new Auto ("DODGE", "1500", 1983, "YHN978");
let auto3=new Auto ("FIAT","128 BERLINA", 1979, "RHA989");

let moto1=new Moto ("KAWASAKI","GTO" , 1981, "780DLF");
let moto2=new Moto ("HONDA","NIGHTHAWK",1991,"234RHN");

let camion1=new Camion ("MERCEDES","1114",1966,"EDR879");
let camion2=new Camion ("BORGWARD","B611", 1961, "IKS798");
let camion3=new Camion ("CHEVROLET","C60", 1968,"RTY979");
let camion4=new Camion ("FORD","F-350",1982, "ERT354");

let registro = new Registroautomotor ([auto1,auto2,auto3],[moto1,moto2],[camion1,camion2,camion3,camion4]);


console.log(registro);

let nuevoauto=new Auto ("generico","modgen",2024,"eee000");
registro.agregarAuto(nuevoauto);
console.log("***AGREGO AUTO***", registro.getRegistro1());

let nuevamoto=new Moto ("Mot.gen","masgen",2024,"444ppp");
registro.agregarMoto(nuevamoto);
console.log("***AGREGO MOTO***", registro.getRegistro2());

let nuevocamion=new Camion ("Camion.gen","gencam",2024,"www444");
registro.agregarCamion(nuevocamion);
console.log("***AGREGO CAMION***", registro.getRegistro3());

