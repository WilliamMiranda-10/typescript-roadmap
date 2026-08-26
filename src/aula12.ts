//  FUNCTION

function loginUser(email: string, password: string): void {
  console.log("Email:", email);
  console.log("Password:", password);
}

loginUser("Willia123@gmail.com", "12345");

function soma(n1: number, n2: number): number {
  let valorTotal: number = n1 + n2;
  return valorTotal;
}

let resNumber: number = soma(15, 33);
console.log(resNumber);

let resString: string = soma(8, 2).toString();
console.log(resString);
