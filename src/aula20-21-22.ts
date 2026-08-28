class Conta {
  protected numero: number; // private pode ser acessado somente pela propria classe
  protected titular: string; // protected somente classe pai e filho
  private saldoConta: number; // public pode ser acessada por qualquer lugar

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }

  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 1000000) + 1;
  }

  protected info() {
    console.log("Titular:", this.titular);
    console.log("Número:", this.numero);
  }

  public saldo() {
    console.log("Saldo da conta:", this.saldoConta);
  }

  protected deposito(valor: number) {
    this.saldoConta += valor;
  }
  protected saque(valor: number) {
    if (valor < 0) {
      console.log("Valor inválido!");
      return;
    }
    if (valor <= this.saldoConta) {
      this.saldoConta -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
  info() {
    console.log("Conta: Pessoa Física");
    super.info();
    console.log("CPF:", this.cpf);
    console.log("========================");
  }

  public deposito(valor: number) {
    if (valor < 0 || valor > 1000) {
      console.log(
        "Depósitos em conta de pessoa física: valor máximo de R$ 1.000,00."
      );
    } else {
      super.deposito(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 1000) {
      console.log(
        "Saque em conta de pessoa física: valor máximo de R$ 1.000,00."
      );
    } else {
      super.saque(valor);
    }
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
  info() {
    console.log("Conta: Pessoa Jurídica");
    super.info();
    console.log("CNPJ:", this.cnpj);
    console.log("========================");
  }

  public deposito(valor: number) {
    if (valor < 0 || valor > 10000) {
      console.log(
        "Depósitos em conta de pessoa jurídica: valor máximo de R$ 10.000,00."
      );
    } else {
      super.deposito(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 10000) {
      console.log(
        "Saque em conta de pessoa jurídica: valor máximo de R$ 10.000,00."
      );
    } else {
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
