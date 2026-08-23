"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [20, 30, 40];
// const numbers: Array<number> = [362, 565, 1120, 444]; // posso usar union types também
// const numbers: (number | string)[] = [15, 45, 33, 86];
numbers.push(50); // add no final
numbers.unshift(10); // add no inicio
numbers.pop(); // remove final
numbers.shift(); // remove do inicio
console.log(numbers);
const numbersReadonly = [10, 56, 44]; // ReadonlyArray somente leitura
// numbersReadonly.push(15) GERA UM ERRO
console.log(numbersReadonly);
