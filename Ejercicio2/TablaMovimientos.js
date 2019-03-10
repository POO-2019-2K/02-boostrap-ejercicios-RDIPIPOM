export default class TablaMovimientos{
    constructor(tablaMovimientos){
        this._tablaMovimientos = tablaMovimientos;
    }

    addMovimiento(movimiento, numeroDeMovimientos){
        let row = this._tablaMovimientos.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = numeroDeMovimientos;
        cell = row.insertCell(1);
        cell.innerHTML = movimiento.tipo;
        cell = row.insertCell(2);
        cell.innerHTML = movimiento.cantidad;
        cell = row.insertCell(3);
        cell.innerHTML = movimiento.fecha;
    }
}