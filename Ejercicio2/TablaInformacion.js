export default class TablaInformacion {
    constructor(tablaInformacion) {
        this._tablaInformacion = tablaInformacion;
        this._numeroDeDepositos = 0;
        this._totalDepositado = 0;
        this._numeroDeRetiros = 0;
        this._totalRetirado = 0;
        this._numeroDeMovimientos = 0;
        this._saldo = 0;

        let row;

        //Fila del número de depósitos
        row = this._tablaInformacion.insertRow(-1);
        this._cellNumeroDeDepositos = row.insertCell(0);
        this._cellNumeroDeDepositos.innerHTML = 'Depósitos';
        this._cellNumeroDeDepositos = row.insertCell(1);
        this._cellNumeroDeDepositos.innerHTML = this._numeroDeDepositos;

        //Fila del total depositado
        row = this._tablaInformacion.insertRow(-1);
        this._cellTotalDepositado = row.insertCell(0);
        this._cellTotalDepositado.innerHTML = 'Total depositado';
        this._cellTotalDepositado = row.insertCell(1);
        this._cellTotalDepositado.innerHTML = this._totalDepositado;

        //Fila del numero de retiros
        row = this._tablaInformacion.insertRow(-1);
        this._cellNumeroDeRetiros = row.insertCell(0);
        this._cellNumeroDeRetiros.innerHTML = 'Numero de retiros';
        this._cellNumeroDeRetiros = row.insertCell(1);
        this._cellNumeroDeRetiros.innerHTML = this._numeroDeRetiros;

        //Fila del total retirado
        row = this._tablaInformacion.insertRow(-1);
        this._cellTotalRetirado = row.insertCell(0);
        this._cellTotalRetirado.innerHTML = 'Total retirado';
        this._cellTotalRetirado = row.insertCell(1);
        this._cellTotalRetirado.innerHTML = this._totalRetirado;

        //Fila del numero de movimientos
        row = this._tablaInformacion.insertRow(-1);
        this._cellNumeroDeMovimientos = row.insertCell(0);
        this._cellNumeroDeMovimientos.innerHTML = 'Numero de movimientos';
        this._cellNumeroDeMovimientos = row.insertCell(1);
        this._cellNumeroDeMovimientos.innerHTML = this._numeroDeMovimientos;

        //Fila del saldo
        row = this._tablaInformacion.insertRow(-1);
        this._cellSaldo = row.insertCell(0);
        this._cellSaldo.innerHTML = 'Saldo';
        this._cellSaldo = row.insertCell(1);
        this._cellSaldo.innerHTML = this._saldo;
    }

    get numeroDeDepositos() {
        return this._numeroDeDepositos;
    }

    get totalDepositado() {
        return this._totalDepositado;
    }

    get numeroDeRetiros() {
        return this._numeroDeRetiros;
    }

    get totalRetirado() {
        return this._totalRetirado;
    }

    get numeroDeMovimientos() {
        return this._numeroDeMovimientos;
    }

    get saldo() {
        return this._saldo;
    }

    set numeroDeDepositos(numeroDeDepositos) {
        this._numeroDeDepositos = numeroDeDepositos;
    }

    set totalDepositado(totalDepositado) {
        this._totalDepositado = totalDepositado;
    }

    set numeroDeRetiros(numeroDeRetiros) {
        this._numeroDeRetiros = numeroDeRetiros;
    }

    set totalRetirado(totalRetirado) {
        this._totalRetirado = totalRetirado;
    }

    set numeroDeMovimientos(numeroDeMovimientos) {
        this._numeroDeMovimientos = numeroDeMovimientos;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    update(){
        this._cellNumeroDeDepositos.innerHTML = this._numeroDeDepositos;
        this._cellTotalDepositado.innerHTML = this._totalDepositado;
        this._cellNumeroDeRetiros.innerHTML = this._numeroDeRetiros;
        this._cellTotalRetirado.innerHTML = this._totalRetirado;
        this._cellNumeroDeMovimientos.innerHTML = this._numeroDeMovimientos;
        this._cellSaldo.innerHTML = this._saldo;
    }
}