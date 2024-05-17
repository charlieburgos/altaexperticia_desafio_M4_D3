// creamos la clase impuestos y asignamos sus caracteristicas del diagrama de clases
export class Impuestos{
    #montoBrutoAnual
    #deducciones
    constructor (montoBrutoAnual, deducciones){
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;

    }
    //metodos get para obtener valores de las caracteristicas del objeto
    get montoBrutoAnual(){
        return this.#montoBrutoAnual;
    }
    get deducciones(){
        return this.#deducciones;
    }

    //metodos set para asignar valores a las caracteristicas del objeto
    set montoBrutoAnual(monto){
        return this.#montoBrutoAnual = monto;
    }
    set deducciones(deduccion){
        return this.#deducciones = deduccion;
    }

}