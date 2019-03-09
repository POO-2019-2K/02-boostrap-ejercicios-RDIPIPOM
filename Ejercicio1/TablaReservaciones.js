export default class TablaReservaciones{
    constructor(tablaReservaciones){
        this._tablaReservaciones = tablaReservaciones;
    }

    addReservacion(reservacion, numeroDeReservaciones){
        let row = this._tablaReservaciones.insertRow(-1);
        //Numero de reservaciones actuales
        let cell = row.insertCell(0);
        cell.innerHTML = numeroDeReservaciones;
        //Nombre de la persona que reservó
        cell = row.insertCell(1);
        cell.innerHTML = reservacion.nombre;
        //El tipo de habitacion elegida
        cell = row.insertCell(2);
        cell.innerHTML = reservacion.getTipoHabitacion();
        //Fecha en la que se realizó la reservación
        cell = row.insertCell(3);
        cell.innerHTML = new Date(Date.now());
        //Numero de días reservados
        cell = row.insertCell(4);
        cell.innerHTML = reservacion.numeroDeDiasReservados;
        //Fecha de llegada
        cell = row.insertCell(5);
        cell.innerHTML = reservacion.diaDeInicio;
        //Fecha de término
        cell = row.insertCell(6);
        cell.innerHTML = reservacion.diaDeTermino;
    }
}