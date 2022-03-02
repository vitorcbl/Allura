import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"



const contaCorrente1 = new ContaCorrente("10102",5000);
const cliente1 = new Cliente("Adam","11122233344",contaCorrente1);
cliente1.rg = 123456123;
//console.log("Conta Corrente 1 = ", contaCorrente1);

const contaCorrente2 = new ContaCorrente("10555",250);
const cliente2 = new Cliente("Alice","11122233346",contaCorrente2);
cliente2.rg = 1987655678;

contaCorrente1.deposito(500)

let valorSacado = 1200;
contaCorrente1.saque(valorSacado);
valorSacado = 7500;
contaCorrente1.saque(valorSacado);

console.log(cliente1, cliente2);
contaCorrente1.deposito(-250);



console.log("\n\n",contaCorrente1.toString());
console.log(contaCorrente2.toString());
const valorTransf = 215;
contaCorrente1.transferir(valorTransf, contaCorrente2);

console.log(cliente1, `Saldo: ${contaCorrente1.saldo}`);
console.log(cliente2, `Saldo: ${contaCorrente2.saldo}`);
console.log("SEPARANDO TUDO\n\n\n\n\n");


const contaCorrente3 = new ContaCorrente("123123", 15500);
const cliente3 = new Cliente("Walter Simba", "98798798702", contaCorrente3);

const cliente4 = new Cliente("Testando Cliente", "12345678901", new ContaCorrente());
const contaCorrente4 = new ContaCorrente("951951", 5000);

console.log(cliente4._contaCorrente.agencia);
console.log(`Quantidade de Contas: ${ContaCorrente.numeroContas}`);
console.log(`Quantidade de Clientes: ${Cliente.numeroClientes}`);

//console.log(cliente3,`Saldo: ${cliente3._contaCorrente.saldo}`);


