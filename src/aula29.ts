// GENERICS

function retornar<T>(valor:T):T{
    return valor
}

console.log(retornar<number>(120))
console.log(retornar<string>("William"))
console.log(retornar<boolean>(true))


class Test<T> {
  public valor: T;
  constructor(valor: T) {
    this.valor = valor;
  }
}

const test1= new Test<number>(15)
console.log(test1.valor)
