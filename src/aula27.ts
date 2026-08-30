interface User {
  name: string;
  age: number;
  email?: string;
  password?: string;
  profession?: string;
  isMarried: boolean;
}

const userWilliam: User = {
  name: "William",
  age: 30,
  email: "Wilian123@gmai.com",
  password: "12345",
  profession: "Marmorista, em transição de carreira para dev",
  isMarried: true,
};

const userJo: User = {
  name: "Jó",
  age: 89,
  profession: "Aposentado",
  isMarried: true,
};

console.log(userWilliam);
console.log(userJo);
