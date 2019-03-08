export default class TablaReservaciones{
    constructor(tablaReservaciones){
        this._tablaReservaciones = tablaReservaciones;
    }

    addReservacion(reservacion, numeroDeReservaciones){
        let row = this._tablaReservaciones.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = numeroDeReservaciones;
        let cell = row.insertCell(1);
        cell.innerHTML = reservacion.nombre();
        cell = row.insertCell(2);
        cell.innerHTML = reservacion.tipoDeHabitacion();
        cell = row.insertCell(3);
        cell.innerHTML = Date.now();
        cell = row.insertCell(4);
        cell.innerHTML = reservacion.numeroDeDiasReservados();
        cell = row.insertCell(5);
        cell.innerHTML = reservacion.diaDeInicio();
        cell = row.insertCell(6);
        cell.innerHTML = reservacion.diaDeTermino();
    }
}