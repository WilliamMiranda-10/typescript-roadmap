class Conta {
  numero: number;
  titular: string;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
  }

  gerarNumeroConta(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
}

const contaPfisica = new ContaPF(1565589432, "William");

const contaPJuridica = new ContaPJ(4556889000115, "Top Marmore");

console.log(contaPfisica.titular);
console.log(contaPJuridica.titular);
