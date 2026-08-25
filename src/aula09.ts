// ENUM -> ENUMERADORES

enum days {
  domingo = 1,
  segundaFeira = 2,
  terçaFeira = 3,
  quartaFeira = 4,
  quintaFeira = 5,
  sextaFeira = 6,
  sabado = 7,
}

console.log(days.domingo);
console.log(days[6]);
console.log(days["segundaFeira"]);

const date = new Date();

console.log(date.getDay() + 1);

console.log(days[date.getDay() + 1]);

enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  verde = "#0f0",
  azul = "#00f",
}

console.log(cores.preto);
console.log(cores["verde"]);

// console.log(cores["#00f"]); -> erro

enum tiposUsuarios {
  USER = 10,
  ADMIN = 100,
  SUPER = 1000,
}

console.log(tiposUsuarios.ADMIN);

const tp: tiposUsuarios = tiposUsuarios.SUPER;
console.log(tp);
