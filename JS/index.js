import { metrosKilometros, kilometrosMillas, millasMetros} from "./conversorLongitud.js";
import { gramosKilogramos } from "./conversorPeso.js";

let opcion = Number(prompt("Elija el tipo de conversión que desea: \n 1.Longitud \n 2.Peso"))

switch(opcion){
    case 1:
        let opcionUno = Number(prompt("Seleccione: \n1.Metros a Kilómetros \n2.Kilómetros a Millas \n3.Millas a Metros"))
        switch(opcionUno){
            case 1:
                metrosKilometros()
                break;
            case 2:
                kilometrosMillas()
                break;
            case 3:
                millasMetros()
                break;
            default:
        console.log("Opcion no valida")
        break;
        }
        break;
    case 2:
        let opcionDos = Number(prompt("Seleccione: \n1.Gramos a Kilogramos \n2.Kilogramos a Libras \n3.Libras a Gramos"))
        switch(opcionDos){
            case 1:
                gramosKilogramos()
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            default:
        console.log("Opcion no valida")
        break;  
        }
        break;
    default:
        console.log("Opcion no valida")
        break;
}