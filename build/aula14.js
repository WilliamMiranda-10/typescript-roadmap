"use strict";
// Arrow Function
Object.defineProperty(exports, "__esModule", { value: true });
const test = (txt) => {
    //  "?" -> paramentro opcional
    console.log(txt);
};
test("Olá Mundo!!!");
test(); // ---> nao passei nem um valor pois o parametro e opcional
const sum = (array) => {
    let total = 0;
    array.forEach((valor) => {
        total += valor;
    });
    return total;
};
let numbers = [12, 26, 33, 59, 48, 55];
const total = sum(numbers);
console.log("Valor total:", total);
