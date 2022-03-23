import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    teste(){
        super.teste();
        console.log("Corrente");
    }
    
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}
