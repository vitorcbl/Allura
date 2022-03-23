import {Cliente} from "./Contas/Cliente.js"
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupança } from "./Contas/ContaPoupança.js";
import { ContaSalario } from "./Contas/ContaSalario.js";

const cliente1 = new Cliente("Samantha", 12345678901);

const conta1 = new ContaCorrente(cliente1, 1001);
const contaPoupança = new ContaPoupança(50, cliente1, 2002);

/*conta1.depositar(500);
conta1.sacar(100);
console.log("Conta1: ",conta1);
contaPoupança.sacar(10);
console.log("ContaPoupança: ",contaPoupança);
conta1.teste();
contaPoupança.teste();*/


const contaSal = new ContaSalario(cliente1);
contaSal.depositar(100);
contaSal.sacar(10);
console.log(contaSal);
