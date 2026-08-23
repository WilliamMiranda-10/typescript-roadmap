class User {
  name: string;
  age: number;
  email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const william = new User("William", 30, "will123@gmail.com");

console.log(william.name);
