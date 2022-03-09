import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Tiago", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Matheus", 5000, 12345678905);
gerente.cadastrarSenha("1234")

const cliente = new Cliente("Pedro", 78955656510, "157");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "157");
console.log( diretorEstaLogado, gerenteEstaLogado);

