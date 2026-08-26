// FUNCTION -> PARÂMETROS PADRÕES E OPCIONAIS

function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}

console.log(soma());

function newUser(email: string, password: string, name?: string): void {
  console.log("Email:", email); // Email: William123@gmail.com
  console.log("Password:", password); // Password: 12345
  console.log("Nome:", name); // Nome: undefined
}

newUser("William123@gmail.com", "12345");
