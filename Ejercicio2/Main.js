import TablaInformacion from './TablaInformacion.js';
import TablaMovimientos from './TablaMovimientos.js';
import Movimiento from './Movimiento.js';

export default class Main {
    constructor() {
        this._tablaMovimientos = new TablaMovimientos(document.querySelector('#tablaMovimientos'));
        this._tablaInformacion = new TablaInformacion(document.querySelector('#tablaInformacion'));
        this._numeroDeMovimientos = 0;
        this._numeroDeDepositos = 0;
        this._numeroDeRetiros = 0;

        document.querySelector('#btnRealizarMovimiento').addEventListener('click', () => {
            this._numeroDeMovimientos++;

            let tipo = document.querySelector('#tipo').value;
            let cantidad = Number(document.querySelector('#cantidad').value);

            let movimiento = new Movimiento(new Date(), tipo, cantidad);
            this._tablaMovimientos.addMovimiento(movimiento, this._numeroDeMovimientos);

            if(tipo === 'Depósito'){
                this._numeroDeDepositos++;
                this._tablaInformacion.numeroDeDepositos = this._numeroDeDepositos;
                this._tablaInformacion.totalDepositado = this._tablaInformacion.totalDepositado + movimiento.cantidad;
                this._tablaInformacion.saldo = this._tablaInformacion.saldo + movimiento.cantidad;
            }else{
                    this._numeroDeRetiros++;
                    this._tablaInformacion.numeroDeRetiros = this._numeroDeRetiros;
                    this._tablaInformacion.totalRetirado = this._tablaInformacion.totalRetirado + movimiento.cantidad;
                    this._tablaInformacion.saldo = this._tablaInformacion.saldo - movimiento.cantidad;                
            }
            this._tablaInformacion.numeroDeMovimientos = this._numeroDeMovimientos;
            this._tablaInformacion.update();            
        });
    }
}

let m = new Main();