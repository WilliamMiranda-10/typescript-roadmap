"use strict";
// OBJECT
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    name: "William",
    age: 30,
    email: "will123@gmail.com",
    ola: () => {
        console.log("Oi");
    },
    info: (name) => {
        console.log("Meu nome é", name);
    },
};
data.info(data.name);
data.age = 31;
console.log(data.age);
