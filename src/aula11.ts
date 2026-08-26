// TYPE ASSERTION E TYPECAST

let numberValue: number;
let stringValue: string;
let unknownValue: unknown;

unknownValue = 10;
stringValue = "20";

numberValue = <number>(<unknown>stringValue);

// numberValue = <number>unknownValue;
stringValue = <string>unknownValue;
stringValue += 10;

console.log(typeof unknownValue);
console.log(unknownValue);

console.log(typeof numberValue);
console.log(numberValue);

console.log(typeof stringValue);
console.log(stringValue);

let svalue: string;
let nvalue: number;

svalue = "11";

// nvalue = svalue // -> o tipo string nao pode ser atribuido ao tipo number
nvalue = <number>(<unknown>svalue);

// TYPECAST

numberValue = Number(stringValue);
console.log(numberValue);

stringValue = numberValue.toString();
console.log(stringValue);

nvalue = Number.parseInt(svalue);
console.log(nvalue);
