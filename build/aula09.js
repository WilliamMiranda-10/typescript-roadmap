// ENUM -> ENUMERADORES
var days;
(function (days) {
    days[days["domingo"] = 1] = "domingo";
    days[days["segundaFeira"] = 2] = "segundaFeira";
    days[days["ter\u00E7aFeira"] = 3] = "ter\u00E7aFeira";
    days[days["quartaFeira"] = 4] = "quartaFeira";
    days[days["quintaFeira"] = 5] = "quintaFeira";
    days[days["sextaFeira"] = 6] = "sextaFeira";
    days[days["sabado"] = 7] = "sabado";
})(days || (days = {}));
console.log(days.domingo);
console.log(days[6]);
console.log(days["segundaFeira"]);
const date = new Date();
console.log(date.getDay() + 1);
console.log(days[date.getDay() + 1]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.preto);
console.log(cores["verde"]);
// console.log(cores["#00f"]); -> erro
var tiposUsuarios;
(function (tiposUsuarios) {
    tiposUsuarios[tiposUsuarios["USER"] = 10] = "USER";
    tiposUsuarios[tiposUsuarios["ADMIN"] = 100] = "ADMIN";
    tiposUsuarios[tiposUsuarios["SUPER"] = 1000] = "SUPER";
})(tiposUsuarios || (tiposUsuarios = {}));
console.log(tiposUsuarios.ADMIN);
const tp = tiposUsuarios.SUPER;
console.log(tp);
export {};
