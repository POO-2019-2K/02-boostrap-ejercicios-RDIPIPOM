import TablaReservaciones from './TablaReservaciones.js';
import Reservacion from './Reservacion.js';

export default class Main {
    constructor(){
        var numeroReservaciones = 0;
        var tablaReservaciones = new TablaReservaciones(document.querySelector('#tablaDeReservacion'));
        document.querySelector('#btnReservar').addEventListener('click', () => {
            let nombre = document.querySelector('#nombre').value;
            let tipoHabitacion = document.querySelector('#tipoHabitacion').value;
            let diaInicio = new Date(document.querySelector('#diaInicio').value);
            let diaTermino = new Date(document.querySelector('#diaTermino').value);

            let reservacion = new Reservacion(nombre, tipoHabitacion, diaInicio, diaTermino);
            tablaReservaciones.addReservacion(reservacion, numeroReservaciones);
        })        
    }
}

var m = new Main();