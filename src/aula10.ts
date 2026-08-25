// NULL / UNDEFINED / UNKNOWN

// NULL -> Tipo nulo
// UNDEFINED -> Tipo indefinido
// UNKNOWN -> Tipo desconhecido

let userName: string | null;
userName = null;
console.log(userName); // null

let userName2: any;
console.log(userName2); // undefined

let idUser: unknown = 10; // unknown -> so pode ser atribuido em tipos unknown ou any
// let id: number = idUser; -> foi atribuido ao tipo number porem nao pode

let id: any = idUser;

console.log(id); // 10
