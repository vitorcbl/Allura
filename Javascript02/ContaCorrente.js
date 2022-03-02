export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    
    #saldo = 0; // variável ou classe com # ou _ precedendo ela, 
    //é uma convenção da comunidade para modificador de acesso privado.
    get saldo(){ 
        return this.#saldo;
    } //Variaveis com # nem aparecem quando o objeto é chamado de modo geral, 
    //somente aparecem quando sao chamados diretamente, ja as variaveis com _ aparece

    constructor(agency, valor){
        this.agencia = agency;
        this.#saldo = valor == NaN || valor == undefined ? 0 : valor;
        //console.log(`Conta corrente criada com agencia ${this.agencia} e saldo ${this.#saldo}`);
        ContaCorrente.numeroContas += 1;
    }


    saque(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso.`)
            return valor;
        } else {
            console.log(`Tentativa de saque não autorizada.
            Valor do saque: R$${valor}
            Valor do saldo: R$${this.#saldo}`);
            return 0;
        }
    }

    deposito(valor) {
        console.log(`Tentativa de depósito\n\tSaldo atual: R$${this.#saldo}`);
        if (valor < 0) {
            console.log(`\tTentativa de depósito inválida, valor ${valor} é negativo.`);
            return 0;
        }
        this.#saldo += valor;
        console.log(`\tDepositando ${valor}
        Novo Saldo: R$${this.#saldo}\n`);
        return valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.saque(valor);
        conta.deposito(valorSacado);
        conta.cidade = "Brasília";
    }

    toString() {
        return `Agência: ${this.agencia}, Saldo: ${this.#saldo}`;
    }
    
}
