import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";;
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./Conta.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Tiago", 11122233309);


const contaCorrenteTiago = new ContaCorrente( cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log (contaSalario);
