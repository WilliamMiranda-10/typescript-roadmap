"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        (this.nome = nome),
            (this.ram = ram),
            (this.cpu = cpu),
            (this.ligado = false);
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
}
const comp1 = new Computador("PC Gamer", 64, 9);
console.log(comp1.nome);
comp1.ligar();
comp1.info();
