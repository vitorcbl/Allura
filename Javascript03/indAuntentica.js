import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Mateus", 12000, 12312312311);
const gerente = new Gerente("Saulo",6000,98798798722);
const cliente1 = new Cliente("Bruna",45674567999,"XiiiEsqueci");

diretor.cadastraSenha("123456789");
gerente.cadastraSenha("amarelinha");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "amarelinha");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "XiiiEsquecI");

console.log(`Status de Logins:
Diretor: ${diretorEstaLogado}
Gerente: ${gerenteEstaLogado}
Cliente: ${clienteEstaLogado}`);