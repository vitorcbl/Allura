import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);       
    }
    teste(){
        super.teste();
        console.log("Poupança");
    }

    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor,taxa);
    }
}