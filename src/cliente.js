//creamos la clase cliente
export default class Cliente{
    //se hace la variable privada con #
    #nombre
    constructor(nombre, impuesto){
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(name){
        return this.#nombre = name;
    }
//metodo para calcular el impuesto segun formula dada
    calcularImpuesto(){
        return (`El impuesto final a pagar es de:$ ${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21}`);
    }

}
