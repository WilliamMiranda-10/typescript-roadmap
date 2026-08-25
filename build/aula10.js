"use strict";
// NULL / UNDEFINED / UNKNOWN
Object.defineProperty(exports, "__esModule", { value: true });
// NULL -> Tipo nulo
// UNDEFINED -> Tipo indefinido
// UNKNOWN -> Tipo desconhecido
let userName;
userName = null;
console.log(userName); // null
let userName2;
console.log(userName2); // undefined
let idUser = 10; // unknown -> so pode ser atribuido em tipos unknown ou any
// let id: number = idUser; -> foi atribuido ao tipo number porem nao pode
let id = idUser;
console.log(id); // 10
