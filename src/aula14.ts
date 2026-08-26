// ARROW FUNCTIONS

const test = (txt?: string): void => {
  //  "?" -> paramentro opcional
  console.log(txt);
};

test("Olá Mundo!!!"); // Olá Mundo!!!
test(); // undefined ---> nao passei nem um valor pois o parametro e opcional

const sum = (array: number[]) => {
  let total: number = 0;

  array.forEach((valor) => {
    total += valor;
  });
  return total;
};

let numbers = [12, 26, 33, 59, 48, 55];

const total: number = sum(numbers);

console.log("Valor total:", total); // Valor total: 233
