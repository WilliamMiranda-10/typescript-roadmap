"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userWilliam = {
    name: "William",
    age: 30,
    email: "Wilian123@gmai.com",
    password: "12345",
    profession: "Marmorista, em transição de carreira para dev",
    isMarried: true,
};
const userJo = {
    name: "Jó",
    age: 89,
    profession: "Aposentado",
    isMarried: true,
};
console.log(userWilliam);
console.log(userJo);
function createUser(user) {
    console.log(`Usuário ${user.name} criado com sucesso!`);
}
createUser(userWilliam);
