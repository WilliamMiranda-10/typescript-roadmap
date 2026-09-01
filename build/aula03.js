class User {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
const william = new User("William", 30, "will123@gmail.com");
console.log(william.name);
export {};
