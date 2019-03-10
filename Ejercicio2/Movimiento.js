export default class Movimiento {
    constructor(fecha, tipo, cantidad) {
        this._fecha = fecha;
        this._tipo = tipo;
        this._cantidad = cantidad;
    }

    get fecha() {
        return this._fecha;
    }

    get tipo() {
        return this._tipo;
    }

    get cantidad() {
        return this._cantidad;
    }
}