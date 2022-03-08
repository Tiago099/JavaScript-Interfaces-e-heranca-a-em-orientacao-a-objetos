import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";;
import { ContaPoupanca } from "./contaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Tiago", 11122233309);



const contaCorrenteTiago = new ContaCorrente( cliente1, 1001);
contaCorrenteTiago.depositar(500);
contaCorrenteTiago.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


console.log(contaPoupanca);
console.log(contaCorrenteTiago);