//importamos Cliente desde el archivo donde se creo el objeto
import Cliente from "./cliente.js";
//importamos impuestos desde el archivo donde fue creado el objeto
import {Impuestos}  from "./impuestos.js";

//creamos una variable donde almacenamos los valores de oobjeto impuesto, segun como se creo montobruto,deduccion
let impuestoCliente = new Impuestos(1514, 336);
//creamos el objeto persona 
let persona = new Cliente('Nelson', impuestoCliente);


console.log( persona.nombre,' tiene un Monto Bruto Anual de $', persona.impuesto.montoBrutoAnual, ' y una deduccion de $', persona.impuesto.deducciones )
console.log('Si ((',persona.impuesto.montoBrutoAnual,'-',persona.impuesto.deducciones,') x 21%) , entonces', persona.calcularImpuesto())