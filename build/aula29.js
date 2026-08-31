"use strict";
// GENERICS
Object.defineProperty(exports, "__esModule", { value: true });
function retornar(valor) {
    return valor;
}
console.log(retornar(120));
console.log(retornar("William"));
console.log(retornar(true));
class Test {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const test1 = new Test(15);
console.log(test1.valor);
