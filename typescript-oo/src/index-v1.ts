import {ContaBancaria} from "./model/ContaBancaria";

const conta1 = new ContaBancaria; 

let saldoAtual: number;
let deuCerto: boolean;

saldoAtual = conta1.consultar();
console.log(`Saldo inicial: ${saldoAtual}`);

deuCerto = conta1.depositar(50);
if(!deuCerto){
    console.log("Não foi possível realizar o depósito.");
} else{
    saldoAtual = conta1.consultar();
    console.log(`Saldo após o depósito: ${saldoAtual}`);
}

deuCerto = conta1.depositar(100);
if(!deuCerto){
    console.log("Não foi possível realizar o depósito.");
} else{
    saldoAtual = conta1.consultar();
    console.log(`Saldo após o depósito: ${saldoAtual}`);
}

deuCerto = conta1.sacar(130);
if(!deuCerto){
    console.log("Não foi possível realizar o saque.");
} else{
    saldoAtual = conta1.consultar();
    console.log(`Saldo após o saque: ${saldoAtual}`);

}

deuCerto = conta1.sacar(50);
if(!deuCerto){
    console.log("Não foi possível realizar o saque.");
} else{
    saldoAtual = conta1.consultar();
    console.log(`Saldo após o saque: ${saldoAtual}`);
}