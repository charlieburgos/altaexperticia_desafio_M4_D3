"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = require("./impuestos.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importamos Cliente desde el archivo donde se creo el objeto

//importamos impuestos desde el archivo donde fue creado el objeto

//creamos una variable donde almacenamos los valores de oobjeto impuesto, segun como se creo montobruto,deduccion
var impuestoCliente = new _impuestos.Impuestos(1514, 336);
//creamos el objeto persona 
var persona = new _cliente["default"]('Nelson', impuestoCliente);
console.log(persona.nombre, ' tiene un Monto Bruto Anual de $', persona.impuesto.montoBrutoAnual, ' y una deduccion de $', persona.impuesto.deducciones);
console.log('Si ((', persona.impuesto.montoBrutoAnual, '-', persona.impuesto.deducciones, ') x 21%) , entonces', persona.calcularImpuesto());