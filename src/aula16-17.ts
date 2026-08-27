class Computador {
  nome: string;
  ram: number;
  cpu: number;
  ligado: boolean;

  constructor(nome: string, ram: number, cpu: number) {
    (this.nome = nome),
      (this.ram = ram),
      (this.cpu = cpu),
      (this.ligado = false);
  }
  info(): void {
    console.log("Nome:", this.nome);
    console.log("ram:", this.ram);
    console.log("cpu:", this.cpu);
    console.log("ligado:", this.ligado ? "Sim" : "não");
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }
}

const comp1 = new Computador("PC Gamer", 64, 9);

console.log(comp1.nome);

comp1.ligar();

comp1.info();