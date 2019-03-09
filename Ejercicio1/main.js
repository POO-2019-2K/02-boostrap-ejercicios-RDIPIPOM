import TablaReservaciones from './TablaReservaciones.js';
import TablaInformacion from './TablaInformacion.js'
import Reservacion from './Reservacion.js';

export default class Main {
    constructor(){
        var numeroReservaciones = 0;
        var tablaReservaciones = new TablaReservaciones(document.querySelector('#tablaDeReservacion'));
        var tablaInformacion = new TablaInformacion(document.querySelector('#tablaDeInformacion'));
        document.querySelector('#btnReservar').addEventListener('click', () => {
            numeroReservaciones++;
            let nombre = document.querySelector('#nombre').value;
            let tipoHabitacion = document.querySelector('#tipoHabitacion').value;
            
            let fechaSeparada = document.querySelector('#diaInicio').value.split('-');
            let diaInicio = new Date (fechaSeparada[0], fechaSeparada[1], fechaSeparada[2]);

            fechaSeparada = document.querySelector('#diaTermino').value.split('-');
            let diaTermino = new Date (fechaSeparada[0], fechaSeparada[1], fechaSeparada[2]);

            let reservacion = new Reservacion(nombre, tipoHabitacion, diaInicio, diaTermino);
            tablaReservaciones.addReservacion(reservacion, numeroReservaciones);

            tablaInformacion.update(numeroReservaciones);
        })        
    }
}

var m = new Main();