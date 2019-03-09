export default class TablaInformacion {
    constructor(tablaInformacion) {
        this._tablaInformacion = tablaInformacion;
        this._row = this._tablaInformacion.insertRow(-1);
        this._cell = this._row.insertCell(0);
        this._cell.innerHTML = 'Reservaciones';
        this._cell = this._row.insertCell(1);
        this._cell.innerHTML = '0';
    }

    update(numeroDeReservaciones) {
        this._cell.innerHTML = numeroDeReservaciones;
    }
}