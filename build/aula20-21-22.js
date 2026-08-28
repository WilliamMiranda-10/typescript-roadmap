"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero; // private pode ser acessado somente pela propria classe
    titular; // protected somente classe pai e filho
    saldoConta; // public pode ser acessada por qualquer lugar
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 1000000) + 1;
    }
    info() {
        console.log("Titular:", this.titular);
        console.log("Número:", this.numero);
    }
    saldo() {
        console.log("Saldo da conta:", this.saldoConta);
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("Valor inválido!");
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("Conta: Pessoa Física");
        super.info();
        console.log("CPF:", this.cpf);
        console.log("========================");
    }
    deposito(valor) {
        if (valor < 0 || valor > 1000) {
            console.log("Depósitos em conta de pessoa física: valor máximo de R$ 1.000,00.");
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("Saque em conta de pessoa física: valor máximo de R$ 1.000,00.");
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log("Conta: Pessoa Jurídica");
        super.info();
        console.log("CNPJ:", this.cnpj);
        console.log("========================");
    }
    deposito(valor) {
        if (valor < 0 || valor > 10000) {
            console.log("Depósitos em conta de pessoa jurídica: valor máximo de R$ 10.000,00.");
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("Saque em conta de pessoa jurídica: valor máximo de R$ 10.000,00.");
        }
        else {
            super.saque(valor);
        }
    }
}
const contaPfisica = new ContaPF(1565589432, "William");
const contaPJuridica = new ContaPJ(4556889000115, "Top Marmore");
// contaPfisica.info();
// contaPJuridica.info();
// contaPJuridica.deposito(5000);
// contaPJuridica.saldo()
contaPfisica.deposito(1000);
contaPfisica.saldo();
contaPfisica.saque(150.9);
contaPfisica.saldo();
