export default class Reservacion {
    constructor(nombre, IDTipoDeHabitacion, diaDeInicio, diaDeTermino) {
        this._nombre = nombre;
        this._IDTipoDeHabitacion = IDTipoDeHabitacion;
        this._diaDeInicio = diaDeInicio;
        this._diaDeTermino = diaDeTermino;
        this._numeroDeDiasReservados = (this._diaDeTermino.getTime() - this._diaDeInicio.getTime())/(24*60*60*1000);
        this._IDTipoDeHabitacion = IDTipoDeHabitacion;
    }

    get nombre() {
        return this._nombre;
    }

    get IDTipoDeHabitacion() {
        return this._IDTipoDeHabitacion;
    }

    get diaDeInicio() {
        return this._diaDeInicio;
    }

    get diaDeTermino() {
        return this._diaDeTermino;
    }

    get numeroDeDiasReservados() {
        return this._numeroDeDiasReservados;
    }

    getTipoHabitacion() {
        switch (this._IDTipoDeHabitacion) {
            case 'unaHabitacion':
                return 'Una habitación'
            case 'habitacionDoble':
                return 'Habitación doble';
            case 'habitacionTriple':
                return 'Habitación triple'
            case 'suite':
                return 'Suite';
        }
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set IDTipoDeHabitacion(IDTipoDeHabitacion) {
        this._IDTipoDeHabitacion = IDTipoDeHabitacion;
    }

    set diaDeInicio(diaDeInicio) {
        this._diaDeInicio = diaDeInicio;
    }

    set diaDeTermino(diaDeTermino) {
        this._diaDeTermino = diaDeTermino;
    }

    set numeroDeDiasReservados(numeroDeDiasReservados) {
        this._numeroDeDiasReservados = numeroDeDiasReservados;
    }
}