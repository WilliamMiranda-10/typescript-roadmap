class User {
  name: string;
  age: number;
  email: string;
  password: string;

  constructor(name: string, age: number, email: string, password: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

class Product {
  name: string;
  price: number;
  amount: number;

  constructor(name: string, price: number, amount: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}

export { User, Product };
