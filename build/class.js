class User {
    name;
    age;
    email;
    password;
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}
class Product {
    name;
    price;
    amount;
    constructor(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}
export { User, Product };
