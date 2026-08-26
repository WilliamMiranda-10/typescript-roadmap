"use strict";
// FUNCTION -> PARÂMETROS PADRÕES E OPCIONAIS
Object.defineProperty(exports, "__esModule", { value: true });
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma());
function newUser(email, password, name) {
    console.log("Email:", email); // Email: William123@gmail.com
    console.log("Password:", password); // Password: 12345
    console.log("Nome:", name); // Nome: undefined
}
newUser("William123@gmail.com", "12345");
