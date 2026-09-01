class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        (this.nome = nome),
            (this.ram = ram),
            (this.cpu = cpu),
            (this.ligado = false);
        this.id = 0;
    }
    info() {
        console.log("Nome:", this.nome);
        console.log("ram:", this.ram);
        console.log("cpu:", this.cpu);
        console.log("ligado:", this.ligado ? "Sim" : "não");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upgradeRam(qtde) {
        if (qtde >= 0 && qtde <= 500) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade de ${qtde} GB não é permitido para o ${this.nome}!`);
        }
    }
}
const comp1 = new Computador("PC Gamer", 64, 9);
comp1.ligar();
comp1.upgradeRam(32);
comp1.info();
export {};
