//-- TUPLAS

const user: readonly [string, number] = ["William", 30];

// user.push("Jó", 82) --> readonly nao deixa adicionar, remover, alterar o array, somente leitura

console.log(user); //[ 'William', 30 ]
console.log(user[1]); // 30
