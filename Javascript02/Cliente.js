import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente {
    static numeroClientes = 0;
    nome;
    rg;
    _cpf;
    _contaCorrente;   
    set contaCorrente(novaConta){
        if(novaConta instanceof ContaCorrente)
            this._contaCorrente = novaConta;
    }
    get contaCorrente(){
        return this._contaCorrente;
    }

    get cpf(){
        return this._cpf;
    }
    constructor(nome, cpf, conta){
        this.nome = nome;
        this._cpf = cpf;
        this._contaCorrente = conta;
        Cliente.numeroClientes+=1;
    }
    
}